import { reloadNav } from "./utils/usernavigation";

const user = JSON.parse(localStorage.getItem("currentUser"))

const cont = document.querySelector(".cont")

reloadNav(user, cont)