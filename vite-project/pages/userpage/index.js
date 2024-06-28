try {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const emailElement = document.querySelector('.email p');
    emailElement.textContent = user.email;

} catch(error) {
    console.error(error)
}

const body = document.querySelector("body")

const users = JSON.parse(localStorage.getItem('currentUser'));
reload(users)
function reload(useri) {
    const cont = document.querySelector(".cont")

    const greeting_div = document.createElement("div")
    greeting_div.classList.add("greeting_div")
    const greeting = document.createElement("h1")
    greeting.classList.add("greeting")
    const emailssilka = document.createElement("a")
    emailssilka.classList.add("emailssilka")
    emailssilka.href = "/vite-project/signin/"
    
        greeting.innerHTML = `Добро пожаловать, ${useri.name} ${useri.surname} !`
        emailssilka.innerHTML = useri.email

    greeting_div.append(greeting, emailssilka)
    cont.append(greeting_div)

    

    const wallets_place = document.createElement("div")
    wallets_place.classList.add("wallets")
    const watch_all_wallets = document.createElement("a")
    watch_all_wallets.innerHTML = "Смотреть все кошельки"
    watch_all_wallets.href = "#"
    watch_all_wallets.classList.add("watch_all_wallets")
    cont.append(wallets_place, watch_all_wallets)

    for(let i = 0; i < 4; i++) {
        const wallets = document.createElement("div")
        wallets.classList.add("wallets_js")
        wallets_place.append(wallets)
    }

    const last_transactions = document.createElement("div")
    const txt = document.createElement("p")
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




    category_summ.append(category, summ)
    id_sentfromwallet.append(id, sentfromwallet)
    about.append(id_sentfromwallet, category_summ)
    last_transactions.append(txt, about)
    cont.append(last_transactions)



}