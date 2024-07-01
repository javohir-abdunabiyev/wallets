import { postData } from "../../utils/http.request";
import { base_url } from "../../utils/http.request";


const form = document.forms.namedItem("walletsadd");
const user = JSON.parse(localStorage.getItem("currentUser"))
form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target);
    const wallet = {
        id: crypto.randomUUID(),
        name: fm.get('name'),
        balance: fm.get('balance'),
        currency: fm.get('currency'),
        created_at: new Date().toLocaleDateString(),
        updated_at: new Date().toLocaleDateString(),
        userID: user.id,
    };

    

    // console.log(wallet);

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
