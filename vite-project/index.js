import { reloadNav } from "./utils/usernavigation";

const user = JSON.parse(localStorage.getItem("currentUser"))


reloadNav(user)