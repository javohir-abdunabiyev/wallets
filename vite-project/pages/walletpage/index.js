import { data } from "../../utils/http.request"
import { reloadWal } from "../../utils/wallets"
import { reloadNav } from "../../utils/usernavigation";


export const cont = document.querySelector(".wallet_cont")

const user = JSON.parse(localStorage.getItem('currentUser'));


const container = document.querySelector(".cont")

reloadNav(user, container)


data("/wallets?userID=" + user.id)
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            const userWallets = res.data.filter(wallet => wallet.userID === user.id);
            reloadWal(userWallets, cont)
        }
    })

