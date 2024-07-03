export function reloadWal(arr, place) {
    place.innerHTML = ''
    for(let wal of arr) {
        let walletbody = document.createElement('div')
        walletbody.classList.add('card')

        let name = document.createElement('h3')
        name.classList.add("h3")
        name.innerHTML = wal.name


        let currency = document.createElement('p')
        currency.classList.add("p")
        currency.innerHTML = wal.currency

        walletbody.append(name, currency)
        place.append(walletbody)
    }
}
