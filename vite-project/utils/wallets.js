export function reloadWal(arr, place) {
    place.innerHTML = ''
    for (let wal of arr) {
        let div = document.createElement('div')
        div.classList.add('card')
        let h3 = document.createElement('h3')
        h3.classList.add("h3")
        let p = document.createElement('p')
        p.classList.add("p")
        h3.innerHTML = wal.name
        p.innerHTML = wal.currency

        div.append(h3, p)
        place.append(div)
    }
}