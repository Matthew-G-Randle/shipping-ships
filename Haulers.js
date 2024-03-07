import { getHaulers, getShips } from "./database.js"



document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        
        switch (whatWasClickedOn.dataset.type){
            case "hauler":
                const ships = getShips();
                let hauledShips = 0
                for (const ship of ships) {
                    if(ship.hauler_FK == whatWasClickedOn.dataset.id){
                        hauledShips++
                    }
                }
                window.alert(`${whatWasClickedOn.dataset.name} hauls ${hauledShips} ships`)
                break
        }
    }
)

export const haulers = () => {
    let haulerHTML = "<ul>"
    const haulers = getHaulers()

    for (const hauler of haulers) {
        haulerHTML += `<li data-id="${hauler.id}"
                        data-dock="${hauler.dock_FK}"
                        data-name="${hauler.name}"
                        data-type="hauler">
                        ${hauler.name}</li>`
    }

    haulerHTML += "</ul>"
    return haulerHTML
}

