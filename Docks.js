import {getDocks, getHaulers} from "./database.js"

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target

        if (whatWasClickedOn.dataset.type == "dock"){
            const haulers = getHaulers()
            // These strings will be used to store the final window alert, which haulers in the port are loading, and which are unloading.
            // These strings will be assembled before the window alert itself
            let outputString = `${whatWasClickedOn.dataset.location} currently has :`
            let haulerLoading = []
            let loaders = false
            let haulerUnloading = []
            let unloaders = false
            const haulerNothing = []
            let nothingers = false

            // For each hauler at this dock, add it to its appropriate array.
            for (const hauler of haulers) {
                if (whatWasClickedOn.dataset.dockid == hauler.dock_FK){
                    switch (hauler.currently){
                        case "loading":
                            haulerLoading.push(hauler.name)
                            loaders = true;
                            break;
                        case "unloading":
                            haulerUnloading.push(hauler.name)
                            unloaders = true;
                            break;
                        default :
                            haulerNothing.push(hauler.name)
                            nothingers = true;
                            break;
                    }
                }
            }

            // Now that we have docks in their appropriate arrays, it's time to construct our output string.
            // The section below constructs a string based on if the array(s) have a hauler, if there have been other haulers added, and if it is the last hauler in the array.

            let i = 0;
            if (loaders){
                for (const hauler of haulerLoading) {
                    if (i > 0){
                        outputString += ", "
                        if (hauler == haulerLoading.slice(-1)[0]){
                            outputString += "and "
                        }
                    }
                    outputString += hauler
                    i++
                }
                outputString += " loading. "
            }
            
            if (unloaders){
                i = 0;
                for (const hauler of haulerUnloading) {
                    if (i > 0){
                        outputString += ", "
                        if (hauler == haulerUnloading.slice(-1)[0]){
                            outputString += "and "
                        }
                    }
                    outputString += hauler
                    i++
                }
                outputString += " unloading. "
            }
            
            if (nothingers){
                i = 0;
                for (const hauler of haulerNothing) {
                    if (i > 0){
                        outputString += ", "
                        if (hauler == haulerNothing.slice(-1)[0]){
                            outputString += "and "
                        }
                    }
                    outputString += hauler
                    i++
                }
                outputString += " doing nothing. "
            }
            
            window.alert(`${outputString}`)

        }
    }
)


export const docks = () => {
    let docksHTML = "<ol>"
    let docks = getDocks()

    // Convert each dock object to an <li> and append to the docksHTML string
    for (const dock of docks) {
        docksHTML += `<li data-dockid="${dock.id}"
                       data-location="${dock.location}"
                       data-type="dock">${dock.location}
                       </li>`
    }

    docksHTML += "</ol>"

    return docksHTML
}
