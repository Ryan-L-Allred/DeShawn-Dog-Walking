import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                const walkerCitiesForWalker = (walker) => {
                    assignments = []
                    for (const assignment of walkerCities) {
                        if (assignment.walkerId === walker.id) {
                            assignments.push(assignment)
                        }
                    }
                    return assignments
                }

                const assignedCityNames = (assignments) => {
                    let cityNames = ""
                    for (const assignment of assignments) {

                        for (const city of cities) {
                            if (city.id === assignment.cityId) {
                                cityNames = `${cityNames} and ${city.name}`
                            }
                        }
                    }
                    return cityNames
                }

                for (const walker of walkers) {
                    if (walker.id === parseInt(walkerId)) {
                        const assignments = walkerCitiesForWalker(walker)
                        const cities = assignedCityNames(assignments)

                        window.alert(`${walker.name} services ${cities}`)
                    }
                }
                // if (walker.id === parseInt(walkerId)) {
                //     window.alert(`${walker.name} services ${walker.city}`)
                // }
            }
        }
    }
)




export const WalkersHTML = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}



