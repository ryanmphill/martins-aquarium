const database = {
    fish: [
        {
            name: "Donovan",
            food: "Plankton",
            size: 7,
            species: "Bellus Anglefish",
            origin: "Tahiti",
            image: "images/bellus_anglefish.jpg"
        },
        {
            name: "Cowboy",
            food: "Tiny crustaceans",
            size: 8,
            species: "Dragonface Pipefish",
            origin: "Vanuatu Islands",
            image: "images/dragonfacepipefish.jpg"
        },
        {
            name: "Mr. Gills",
            food: "Tiny crustaceans",
            size: 20,
            species: "Formosa Wrasse",
            origin: "Sri Lanka",
            image: "images/formosa_wrasse.jpg"
        },
        {
            name: "Vincent",
            food: "Small crustaceans and other invertebrates",
            size: 3,
            species: "Mandarinfish",
            origin: "RyuKyu Islands",
            image: "images/mandarinfish.jpg"
        },
        {
            name: "Ebert",
            food: "Small crustaceans and other invertebrates",
            size: 10,
            species: "Common Cuttlefish",
            origin: "Croatia",
            image: "images/cuttlefish.jpg"
        }
    ]
}

/*------------------Export-Data--------------------------------------*/

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
