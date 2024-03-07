import { getShips, getHaulers } from "./database.js"


document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        if (whatWasClickedOn.dataset.type == "ship"){
            const haulers = getHaulers()
            for (const hauler of haulers) {
                if (whatWasClickedOn.dataset.hauler_fk == hauler.id){
                    window.alert(`${whatWasClickedOn.dataset.name} is hauled by ${hauler.name}`)
                }
            }
        }
    }
)






export const ships = () => {
    let shipsHTML = "<ol>"
    const Ships = getShips()


    for (const ship of Ships) {
        shipsHTML += `<li data-id="${ship.id}"
        data-hauler_fk="${ship.hauler_FK}"
        data-name="${ship.name}"
        data-type="ship">${ship.name}</li>`
    }

    shipsHTML += "</ol>"

    return shipsHTML
}

