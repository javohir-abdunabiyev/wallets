import { postData } from "../../utils/http.request";
import { data } from "../../utils/http.request"
import { reloadNav } from "../../utils/usernavigation";
import axios from "axios";

const form = document.forms.namedItem("actionsadd");
const user = JSON.parse(localStorage.getItem("currentUser"))


const cont = document.querySelector(".cont")

reloadNav(user, cont)


form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target);

    const selectedWallet = select.options[select.selectedIndex].text;


    const transactions = {
        id: crypto.randomUUID(),
        fromWallet: fm.get('fromWallets'),
        fromWalletName: selectedWallet,
        created_at: new Date().toLocaleDateString(),
        userID: user.id,
        summ: fm.get('summ'),
        category: fm.get('category')
    };

        try {
            const res = await postData('/transactions', transactions);
            if (res.status === 200 || res.status === 201) {
                alert('Успешно');
                location.assign("/pages/userpage/");
                form.reset();
            }

            
            
            
        } catch (error) {
            console.error(error);
        }
    
};




const select = document.querySelector("select")

data('/wallets?user_id=' + user.id)
    .then(res => {
        select.innerHTML = '';
    
        res.data.forEach(item => {
            if (item.userID === user.id) {
                let opt = new Option(item.name, item.id);
                select.append(opt);
            }
        });
    })
    .catch(error => {
        console.error('Ошибка при получении кошельков:', error);
    });

const addblc = document.querySelector(".blinp")

addblc.oninput = () => {
    const fromWallet = form.elements['fromWallets'].value;
    const summ = Number(addblc.value);

    data('/wallets?user_id=' + user.id)
        .then(res => {
            const wallet = res.data.find(item => item.id === fromWallet);
            if (wallet) {
                if (wallet.balance < summ) {
                    addblc.classList.add("addblc");
                } else {
                    const newBal = wallet.balance - summ
                    addblc.classList.remove("addblc");

                    axios.put('/wallets/' + wallet.id, { balance: newBalance })
                    .then(updateRes => {
                        addblc.classList.remove("addblc");
                    })
                    .catch(error => {
                        console.error('Ошибка при обновлении баланса:', error);
                    });
                }
            }
        })
        .catch(error => {
            console.error('Ошибка при получении кошельков:', error);
        });
};




