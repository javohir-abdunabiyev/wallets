export function reloadNav(user, place) {
    place.innerHTML = ""

    const nav = document.createElement("nav")
    nav.classList.add("nav_logout")


    const nav_div = document.createElement("div")
    nav_div.classList.add("nav")
    const nav_a = document.createElement("a")
    nav_a.href = "/pages/userpage/"
    nav_a.innerHTML = "Главная"
    nav_a.classList.add("for_a")
    const nav_b = document.createElement("a")
    nav_b.href = "/pages/walletpage/"
    nav_b.innerHTML = "Мои кошельки"
    nav_b.classList.add("for_a")
    const nav_c = document.createElement("a")
    nav_c.href = "/pages/actions/"
    nav_c.innerHTML = "Мои транзакции"
    nav_c.classList.add("for_a")


    const logout_a = document.createElement("a")
    logout_a.href = "#"
    logout_a.classList.add("logout_mail")
    const email = document.createElement("p")
    email.innerHTML = user.email
    email.classList.add("logout_mail")
    const logout_img = document.createElement("img")
    logout_img.src = "/img/logout.svg"


    logout_a.append(email, logout_img)
    nav_div.append(nav_a, nav_b, nav_c)
    nav.append(nav_div, logout_a)
    place.append(nav)

}