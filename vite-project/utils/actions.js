export function reloadActions(arr, place) {
    place.innerHTML = ''
    for(let act of arr) {
        let about_act = document.createElement("div")
        about_act.classList.add("about")

        let id_fromwallet = document.createElement("div")
        id_fromwallet.classList.add("id_sentfromwallet")
        let id = document.createElement("p")
        id.innerHTML = act.id
        let fromwallet = document.createElement("p")
        fromwallet.innerHTML = act.fromWalletName

        let categ_summ = document.createElement("div")
        categ_summ.classList.add("category_summ")
        let categ = document.createElement("p")
        categ.innerHTML = act.category
        let summ = document.createElement("p")
        summ.innerHTML = act.summ



        categ_summ.append(categ, summ)
        id_fromwallet.append(id, fromwallet)
        about_act.append(id_fromwallet, categ_summ)
        place.append(about_act)
    }
}