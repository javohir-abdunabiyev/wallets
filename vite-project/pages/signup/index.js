import { postData } from "../../utils/http.request";
import { base_url } from "../../utils/http.request";
const form = document.forms.namedItem("signup");

form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target);

    const user = {
        id: crypto.randomUUID(),
        email: fm.get('email'),
        name: fm.get('name'),
        surname: fm.get('surname'),
        password: fm.get('password')
    };

    try {
        const usersRes = await fetch(base_url + '/users');
        const data = await usersRes.json();

        const findUser = data.find(users => users.email === user.email);

        if (findUser) {
            alert("Эта почта уже используется.");
        } else {
            const res = await postData('/users', user);

            if (res.status === 200 || res.status === 201) {
                alert("Вы зарегистрировались");
                location.assign('/pages/signin/');
                form.reset();
            }

        }
    } catch (error) {
        console.error(error);
    }
};
