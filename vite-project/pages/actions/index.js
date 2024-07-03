import { data } from "../../utils/http.request";
import { reloadActions } from "../../utils/actions";
import { reloadNav } from "../../utils/usernavigation";

const cont = document.querySelector(".cont_about")

const user = JSON.parse(localStorage.getItem('currentUser'));

const email = document.querySelector(".user_mail")

email.innerHTML = user.email


const container = document.querySelector(".cont")

reloadNav(user, container)

data("/transactions?user_id" + user.id)
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            const userActions = res.data.filter(action => action.userID === user.id)
            reloadActions(userActions, cont)
        }
    })