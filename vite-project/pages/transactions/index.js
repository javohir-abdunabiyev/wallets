import { postData } from "../../utils/http.request";
import { data } from "../../utils/http.request"


const form = document.forms.namedItem("actionsadd");
const user = JSON.parse(localStorage.getItem("currentUser"))
form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target);
    const transactions = {
        id: crypto.randomUUID(),
        fromWallet: fm.get('fromWallet'),
        created_at: new Date().toLocaleDateString(),
        userID: user.id,
        summ: fm.get('summ')
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
        // Очищаем список опций в select
        select.innerHTML = '';
    
        // Фильтруем кошельки пользователя и добавляем их в select
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

