/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/

const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, dock_FK: 4, name: "French Fried", currently: "loading"},
        { id: 2, dock_FK: 3, name: "Hasselbacked", currently: "unloading"},
        { id: 3, dock_FK: 2, name: "Stewed", currently: "unloading"},
        { id: 4, dock_FK: 1, name: "Mashed", currently: "loading"},
        { id: 5, dock_FK: 1, name: "Boiled", currently: "loading"},
        { id: 6, dock_FK: 1, name: "Baked", currently: "loading"},
        { id: 7, dock_FK: 1, name: "Russet", currently: "unloading"},
        { id: 8, dock_FK: 1, name: "Cubed", currently: ""},
    ],
    ships: [
        {id: 1, hauler_FK: 4, name: "Boaty McBoatface"},
        {id: 2, hauler_FK: 3, name: "Usain Boat"},
        {id: 3, hauler_FK: 2, name: "Shore Thing"},
        {id: 4, hauler_FK: 1, name: "Bouyant Buoy"},
        {id: 5, hauler_FK: 1, name: "Boi'nt Miss Chief"},
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShips = () => {
    return database.ships.map(ship => ({...ship}))
}
