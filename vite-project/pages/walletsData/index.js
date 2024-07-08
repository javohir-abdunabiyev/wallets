import { all } from "axios";
import { data } from "../../utils/http.request";
import { reloadVanillaJsCard } from "../../utils/walletsdata";
import { reloadCardsDashboard } from "../../utils/dashboardcards";
import { Chart, registerables } from 'chart.js';
import { getFixers } from "../../utils/http.request";
import moment from "moment";
import axios from "axios";

Chart.register(...registerables);

const id = location.search.split('=').at(-1);
export const h1 = document.querySelector("h1");

const user = JSON.parse(localStorage.getItem('currentUser'));

const card_place = document.querySelector(".card_place");
const all_cards = document.querySelector(".all_cards");

const select = document.querySelector(".mycarrency");

data('/wallets/' + id)
    .then(res => {
        h1.innerHTML = `Wallet: ${res.data.name}`;
        reloadVanillaJsCard(res.data, card_place);
        updateCurrency(res.data.id); // Инициализация селекта с текущим кошельком
    });

data("/wallets?userID=" + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            const userWallets = res.data.filter(wallet => wallet.userID === user.id);
            reloadCardsDashboard(userWallets, all_cards,); // Передача функции обновления валюты
        }
    });

const ctx = document.querySelector("canvas");
let chart;

Promise.all([data('/wallets/' + id), data('/transactions?fromWallet=' + id)])
    .then((array) => {
        const [{ data }, transactions] = array;

        h1.innerHTML = `Wallet: ${data.name}`;

        initChart(transactions.data);
    });

function initChart(data) {
    if (chart) {
        chart.destroy();
    }

    const spendings = [];
    const spending_dates = [];

    data.forEach(transaction => {
        spendings.push(transaction.summ);
        spending_dates.push(moment(transaction.created_at).format('YYYY MMMM DD HH:mm'));
    });

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: spending_dates,
            datasets: [{
                label: 'My First Dataset',
                data: spendings,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                borderJoinStyle: 'miter'
            }]
        }
    });
}

export function updateCurrency(walletId) {
    data('/wallets/' + walletId)
        .then(res => {
            select.innerHTML = '';

            let opt = new Option(res.data.currency);
            select.append(opt);
        })
        .catch(error => {
            console.error('Ошибка при получении кошелька:', error);
        });
}


const select_two = document.querySelector(".tocurrency")

getFixers('/symbols')
    .then(symbols => {
        for(let key in symbols) {
            let opt = new Option(`${key} - ${symbols[key]}`, key)
            select_two.append(opt)
        }
    })


const converter = document.forms.namedItem("converter")

converter.onsubmit = (e) => {
    e.preventDefault()


    const fm = new FormData(e.target)

    const convert_inps = {
        to: fm.get('to'),
        from: fm.get('from'),
        amount: fm.get('amount')
    }


    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: import.meta.env.VITE_API_KEY,
      };



    axios.get(`https://api.apilayer.com/fixer/convert?to=${convert_inps.to}&from=${convert_inps.from}&amount=${convert_inps.amount}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}