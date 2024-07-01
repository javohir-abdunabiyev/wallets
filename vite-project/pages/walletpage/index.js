import { base_url } from "../../utils/http.request"
import { data } from "../../utils/http.request"
import { reloadWal } from "../../utils/wallets"

export const cont = document.querySelector(".wallet_cont")

const user = JSON.parse(localStorage.getItem('currentUser'));


data("/wallets?user_id=" + user.id)
.then(res => {
    if(res.status === 200 || res.status === 201) {
        const userWallets = res.data.filter(wallet => wallet.userID === user.id);
        reloadWal(userWallets, cont)
    }
})