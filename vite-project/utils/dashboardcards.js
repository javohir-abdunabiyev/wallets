import { reloadVanillaJsCard } from "./walletsdata";
import { h1 } from "../pages/walletsData";
import { updateCurrency } from "../pages/walletsData";

export function reloadCardsDashboard(arr, place) {
    place.innerHTML = "";

    const card_place = document.querySelector(".card_place");

    for (let item of arr) {
        const card_board = document.createElement("div");
        card_board.classList.add("card_board");

        card_board.onclick = () => {
            reloadVanillaJsCard(item, card_place);
            h1.innerHTML = `Wallet: ${item.name}`;
            updateCurrency(item.id); // Обновление валюты при выборе кошелька
        };

        const wallet_img = document.createElement("img");
        wallet_img.className = "wallet_img";
        wallet_img.src = "/img/wallet.png";

        const card_name = document.createElement("p");
        card_name.classList.add("cards_dashboard_name");
        card_name.innerHTML = item.name;

        card_board.append(wallet_img, card_name);
        place.append(card_board);
    }
}
