import VanillaTilt from "vanilla-tilt"

export function reloadVanillaJsCard(item, place) {
    place.innerHTML = ""


    const card_block = document.createElement("div")
    card_block.classList.add("card_block")

    card_block.ondblclick = () => {
        card_block.classList.toggle("flipped")
    }

    VanillaTilt.init(card_block, {
        max:20,
        speed: 600,
        scale: 1,
        transition: true,
        easing: 'cubic-bezier(.03, .98, .52, .99)',
        perspective: 600,
        glare: true
    })

    const card_name = document.createElement("p")
    card_name.classList.add("card_name")
    card_name.innerHTML = item.name

    const card_currency = document.createElement("p")
    card_currency.classList.add("card_currency")
    card_currency.innerHTML = item.currency


    card_block.append(card_name, card_currency)
    place.append(card_block)

}



