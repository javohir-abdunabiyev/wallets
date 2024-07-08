import { reloadWal } from "./utils/wallets";
import { base_url } from "./utils/http.request";
import { reloadNav } from "./utils/usernavigation";
import { actions } from "./utils/http.request";
import { data } from "./utils/http.request";


export const users = JSON.parse(localStorage.getItem('currentUser'));

reload(users);

export function reload(useri) {
    const cont = document.querySelector(".cont");
    const nav_logouts = document.querySelector(".nav_log");

    reloadNav(users, nav_logouts);

    const greeting_div = document.createElement("div");
    greeting_div.classList.add("greeting_div");
    const greeting = document.createElement("h1");
    greeting.classList.add("greeting");
    const emailssilka = document.createElement("a");
    emailssilka.classList.add("emailssilka");
    emailssilka.href = "/pages/signup/";
    
    greeting.innerHTML = `Добро пожаловать, ${useri.name} ${useri.surname} !`;
    emailssilka.innerHTML = useri.email;

    greeting_div.append(greeting, emailssilka);
    cont.append(greeting_div);

    const wallets_place = document.createElement("div");
    wallets_place.classList.add("wallets");
    const watch_all_wallets = document.createElement("a");
    watch_all_wallets.innerHTML = "Смотреть все кошельки";
    watch_all_wallets.href = "/pages/walletpage/";
    watch_all_wallets.classList.add("watch_all_wallets");
    cont.append(wallets_place, watch_all_wallets);

    data('/wallets?userID=' + useri.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            const walletsData = res.data.slice(0, 4);
            reloadWal(walletsData, wallets_place);
        }
    })
    .catch(error => {
        console.error('Ошибка при загрузке кошельков:', error);
    });
    

    const last_transactions = document.createElement("div");
    const txt = document.createElement("p");
    txt.classList.add("t_actions");
    txt.innerHTML = "Последние транзакции";

    const about = document.createElement("div");
    about.classList.add("about");

    const id_sentfromwallet = document.createElement("div");
    id_sentfromwallet.classList.add("id_sentfromwallet");
    const id = document.createElement("p");
    id.innerHTML = "ID";
    const sentfromwallet = document.createElement("p");
    sentfromwallet.innerHTML = "Отправлено с кошелька";

    const category_summ = document.createElement("div");
    category_summ.classList.add("category_summ");
    const category = document.createElement("p");
    category.innerHTML = "Категория";
    const summ = document.createElement("p");
    summ.innerHTML = "Сумма транзакции";

    const place_for_actions = document.createElement("div");


    fetch(base_url + '/transactions?userID=' + useri.id)
    .then(response => response.json())
    .then(actionsData => {
        actions(actionsData.slice(0, 7), place_for_actions);
    })
    .catch(error => {
        console.error('Ошибка при загрузке транзакций:', error);
    });

    const watch_all_actions = document.createElement("a");
    watch_all_actions.classList.add("watch_all_actions");
    watch_all_actions.innerHTML = "Добавить оплату";
    watch_all_actions.href = "/pages/transactions/";

    category_summ.append(category, summ);
    id_sentfromwallet.append(id, sentfromwallet);
    about.append(id_sentfromwallet, category_summ);
    last_transactions.append(txt, about, watch_all_actions);
    cont.append(last_transactions,place_for_actions);
}
