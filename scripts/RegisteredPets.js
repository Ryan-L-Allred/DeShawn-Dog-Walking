import { getWalkers } from "./database.js"
import { getPets } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {

            const [,petPrimaryKey] = itemClicked.id.split("--")
            for (const pet of pets) {
                if (pet.id === parseInt(petPrimaryKey)) {
                    window.alert(`${pet.name} barks at you.`)
                }
            }
        }
    }
)
        


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


let matchingPet = null
for (const pet of pets) {
    if (parseInt(petPrimaryKey) === pet.id) {
        matchingPet = pet
    }
}

let matchingWalker = null
for (const walker of walkers) {
    if (matchingPet.walkerId === walker.id) {
        matchingWalker = walker
    }
}

window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}.`)