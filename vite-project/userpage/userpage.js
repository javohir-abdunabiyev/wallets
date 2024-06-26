const usermail = document.querySelector(".usermail")
fetch("http://localhost:8080/users")
    .then(res => res.json())
    .then(user => reload(user))

const cont = document.querySelector(".container")

function reload(user) {
    const greeting_div = document.createElement("div")
    greeting_div.classList.add("greeting_div")
    const greeting = document.createElement("h1")
    greeting.classList.add("greeting")
    const emailssilka = document.createElement("a")
    emailssilka.classList.add("emailssilka")
    emailssilka.href = "#"
    user.forEach(useri => {
        usermail.innerHTML = useri.email
        greeting.innerHTML = `Добро пожаловать, ${useri.name} ${useri.surname} !`
        emailssilka.innerHTML = useri.email
    })

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
}
