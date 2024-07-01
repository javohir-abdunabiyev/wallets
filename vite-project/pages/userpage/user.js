
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const emailElement = document.querySelector('.email p');
    emailElement.textContent = user.email;



const body = document.querySelector("body")

export const users = JSON.parse(localStorage.getItem('currentUser'));
reload(users)
export function reload(useri) {
    const cont = document.querySelector(".cont")

    const greeting_div = document.createElement("div")
    greeting_div.classList.add("greeting_div")
    const greeting = document.createElement("h1")
    greeting.classList.add("greeting")
    const emailssilka = document.createElement("a")
    emailssilka.classList.add("emailssilka")
    emailssilka.href = "/pages/signup/"
    
        greeting.innerHTML = `Добро пожаловать, ${useri.name} ${useri.surname} !`
        emailssilka.innerHTML = useri.email

    greeting_div.append(greeting, emailssilka)
    cont.append(greeting_div)

    

    const wallets_place = document.createElement("div")
    wallets_place.classList.add("wallets")
    const watch_all_wallets = document.createElement("a")
    watch_all_wallets.innerHTML = "Смотреть все кошельки"
    watch_all_wallets.href = "/pages/allwallets/"
    watch_all_wallets.classList.add("watch_all_wallets")
    cont.append(wallets_place)

    for(let i = 0; i < 4; i++) {
        const wallets = document.createElement("div")
        wallets.classList.add("wallets_js")
        wallets_place.append(wallets)
    }

    const last_transactions = document.createElement("div")
    const txt = document.createElement("p")
    txt.classList.add("t_actions")
    txt.innerHTML = "Последние транзакции"

    const about = document.createElement("div")
    about.classList.add("about")

    const id_sentfromwallet = document.createElement("div")
    id_sentfromwallet.classList.add("id_sentfromwallet")
    const id = document.createElement("p")
    id.innerHTML = "ID"
    const sentfromwallet = document.createElement("p")
    sentfromwallet.innerHTML = "Отправлено с кошелька"

    const category_summ = document.createElement("div")
    category_summ.classList.add("category_summ")
    const category = document.createElement("p")
    category.innerHTML = "Категория"
    const summ = document.createElement("p")
    summ.innerHTML = "Сумма транзакции"



    const actions = document.createElement("div")
    actions.classList.add("about")
    const id_action = document.createElement("div")
    id_action.classList.add("id_sentfromwallet")
    const idAct = document.createElement("p")
    idAct.innerHTML = "ID"
    const Actfromwallet = document.createElement("p")
    Actfromwallet.innerHTML = "Отправлено с кошелька"

    const category_act = document.createElement("div")
    category_act.classList.add("category_summ")
    const categoryAct = document.createElement("p")
    categoryAct.innerHTML = "Категория"
    const summAct = document.createElement("p")
    summAct.innerHTML = "Сумма транзакции"


    const watch_all_actions = document.createElement("a")
    watch_all_actions.classList.add("watch_all_wallets")
    watch_all_actions.innerHTML = "Добавить оплату"
    watch_all_actions.href = "/pages/transactions/"



    category_act.append(categoryAct, summAct)
    id_action.append(idAct, Actfromwallet)
    actions.append(id_action, category_act)
    category_summ.append(category, summ)
    id_sentfromwallet.append(id, sentfromwallet)
    about.append(id_sentfromwallet, category_summ)
    last_transactions.append(txt, about, watch_all_actions, actions, watch_all_actions)
    cont.append(last_transactions)



}