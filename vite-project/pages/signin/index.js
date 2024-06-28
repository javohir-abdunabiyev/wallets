import { base_url } from "../../utils/http.request";

const form = document.forms.namedItem("signin");
const emailinp = document.querySelector(".email");
const passinp = document.querySelector(".pass");

form.onsubmit = async (e) => {
    e.preventDefault();

    try {
        const usersRes = await fetch(base_url + '/users');
        const data = await usersRes.json();

        const findUser = data.find(user => user.email === emailinp.value && user.password === passinp.value);

        if (findUser) {
            localStorage.setItem('currentUser', JSON.stringify(findUser));

            alert("Вы успешно вошли в аккаунт");
            location.assign('/pages/userpage/');
            form.reset();
        } else {
            alert("Проверьте правильно ли вы написали свои данные");
        }
    } catch (error) {
        console.error(error);
    }
}
