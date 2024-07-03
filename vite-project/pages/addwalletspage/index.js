import { postData } from "../../utils/http.request";
import { base_url } from "../../utils/http.request";
import { getFixers } from "../../utils/http.request";
import { reloadNav } from "../../utils/usernavigation";


const form = document.forms.namedItem("walletsadd");
const user = JSON.parse(localStorage.getItem("currentUser"))

const cont = document.querySelector(".cont")

reloadNav(user, cont)


form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target);
    const wallet = {
        id: crypto.randomUUID(),
        name: fm.get('name'),
        balance: fm.get('balance'),
        currency: fm.get('currencys'),
        created_at: new Date().toLocaleDateString(),
        updated_at: new Date().toLocaleDateString(),
        userID: user.id,
    };

    


        try {
            const userWallet = await fetch(base_url + '/wallets');
            const data = await userWallet.json();

            const findWallet = data.find(wallt => wallt.name === wallet.name);

            if (findWallet) {
                alert("Кошелёк с таким именем уже существует");
            } else {
                const res = await postData('/wallets', wallet);
                if (res.status === 200 || res.status === 201) {
                    alert('Кошелёк создан');
                    location.assign("/pages/walletpage/");
                    form.reset();
                }
            }
        } catch (error) {
            console.error(error);
        }
    
};


const selecti = document.querySelector('datalist')

getFixers('/symbols')
    .then(symbols => {
        for(let key in symbols) {
            let opt = new Option(`${key} - ${symbols[key]}`, key)

            selecti.append(opt)
        }
    })