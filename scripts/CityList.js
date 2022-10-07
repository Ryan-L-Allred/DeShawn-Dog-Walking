import { Assignments } from "./Assignments.js"
import { getWalkers, getCities, getWalkerCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

// const walkerCitiesForWalker = (walker) => {
//     assignments = []
//     for (const assignment of walkerCities) {
//         if (assignment.walkerId === walker.id) {
//             assignments.push(assignment)
//         }
//     }
//     return assignments
// }

// const assignedCityNames = (assignments) => {
//     let cityNames = ""
//     for (const assignment of assignments) {

//         for (const city of cities) {
//             if (city.id === assignment.cityId) {
//                 cityNames = `${cityNames} and ${city.name}`
//             }
//         }
//     }
//     return cityNames
// }

// for (const walker of walkers) {
//     if (walker.id === parseInt(walkerId)) {
//         const assignments = walkerCitiesForWalker(walker)
//         const cities = assignedCityNames(assignments)

//         window.alert(`${walker.name} services ${cities}`)
//     }
// }





// export const CityList = () => {
//     let citiesHTML = "<ol>"

//     for (const walker of walkers) {
//         citiesHTML += `<li>${walker.city}</li>`
//     }

//     citiesHTML += "</ol>"

//     return citiesHTML
// }
