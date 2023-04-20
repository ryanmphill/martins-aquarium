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
        },
        {
            name: "Miles",
            food: "Small fish and crabs",
            size: 60,
            species: "Green Moray",
            origin: "Bermuda",
            image: "images/morayeel.jpg"
        }
    ],
    helpfulTips: [
        {
            id: 1,
            tip: "Start with a small aquarium: As a beginner, it's best to start with a smaller aquarium, around 30 gallons or less, to help you get used to the maintenance and upkeep required for a saltwater aquarium.",
        },
        {
            id: 2,
            tip: "Invest in quality equipment: Quality equipment is important for the health of your fish and the overall success of your aquarium. Invest in a good filtration system, lighting, and a reliable heater.",
        },
        {
            id: 3,
            tip: "Do regular water changes: Water changes are an essential part of maintaining a healthy saltwater aquarium. It's recommended to change 10% to 20% of the water in your aquarium every two to four weeks.",
        },
        {
            id: 4,
            tip: "Test your water regularly: Testing your water for pH, salinity, and other important parameters is crucial for the health of your fish and invertebrates. Test your water at least once a week to ensure that the levels are within the recommended range.",
        },
        {
            id: 5,
            tip: "Research the fish and invertebrates you want to keep: Not all fish and invertebrates are suitable for a saltwater aquarium. Before buying any fish or invertebrates, do your research to ensure that they are compatible with your aquarium and with each other.",
        },
        {
            id: 6,
            tip: "Be patient: Saltwater aquariums take time to establish and can be challenging to maintain. Be patient and take the time to learn about the care and maintenance required for your specific aquarium.",
        },
        {
            id: 7,
            tip: "Join a local aquarium club: Joining a local aquarium club can be a great way to connect with other hobbyists and learn from their experiences.",
        },
    ],
    locations: [
        {
            id: 1,
            name: "Tahiti",
            description: `Tahiti is the largest island in French Polynesia, which is an overseas collectivity of 
            France located in the South Pacific Ocean. Tahiti is known for its stunning beaches, 
            crystal-clear waters, and vibrant culture. It is also the economic, political, and 
            cultural center of French Polynesia. The island is divided into two parts: Tahiti Nui, 
            which is the larger western section, and Tahiti Iti, which is the smaller eastern section. 
            Papeete, the capital of French Polynesia, is located on Tahiti and is a popular destination 
            for tourists visiting the island. The people of Tahiti are known as Tahitians and their 
            culture is heavily influenced by Polynesian traditions, including music, dance, and art.`,
            image: "images/tahiti.jpg"
        },
        {
            id: 2,
            name: "Vanuatu Islands",
            description: `The Vanuatu Islands are a Pacific island nation located in the South Pacific Ocean. 
            The country is made up of 83 islands, known for their stunning natural beauty, including 
            white-sand beaches, coral reefs, and lush rainforests. The islands are also home to a 
            unique culture that blends Melanesian, Polynesian, and European influences. The capital 
            of Vanuatu is Port Vila, located on the island of Efate. The people of Vanuatu are known 
            as Ni-Vanuatu and their culture is rich in music, dance, and traditional customs. The 
            country is also known for its active volcanoes and is a popular destination for adventure 
            seekers.`,
            image: "images/vanuatu.jpg"
        },
        {
            id: 3,
            name: "Sri Lanka",
            description: `Sri Lanka is an island nation located in South Asia, just off the southern coast of India. 
            The country is known for its stunning natural beauty, including tropical forests, pristine 
            beaches, and ancient temples. The capital of Sri Lanka is Colombo, located on the west coast 
            of the island. The country's history dates back more than 2,500 years and it has been 
            influenced by various cultures over time, including Indian, Portuguese, Dutch, and British. 
            The people of Sri Lanka are predominantly Sinhalese, with significant Tamil and Muslim 
            populations as well. Sri Lanka is also known for its tea production and is a popular destination 
            for tourists seeking culture, adventure, and relaxation.`,
            image: "images/sri-lanka.jpg"
        },
        {
            id: 4,
            name: "RyuKyu Islands",
            description: `The Ryukyu Islands are a chain of islands located in the East China Sea, between Japan 
            and Taiwan. The islands are known for their subtropical climate, coral reefs, and unique 
            culture. The largest island in the chain is Okinawa Island, which is home to the capital 
            city of Naha. The Ryukyu Islands were once an independent kingdom known as the Ryukyu 
            Kingdom, with its own language and culture. The islands have also been influenced by both 
            Japanese and Chinese cultures over time. The people of the Ryukyu Islands are known as 
            Okinawans and their culture is characterized by traditional dance, music, and martial arts. 
            The islands are also known for their cuisine, which includes dishes such as Okinawa soba 
            and goya champuru.`,
            image: "images/ryukyu.jpg"
        },
        {
            id: 5,
            name: "Croatia",
            description: `Croatia is a country located in Southeast Europe, bordering the Adriatic Sea. 
            The country is known for its stunning coastline, dotted with more than a thousand islands, and 
            historic cities such as Dubrovnik and Split. The capital of Croatia is Zagreb, located in the 
            northwestern part of the country. Croatia's history dates back to the Roman Empire and it has 
            been influenced by various cultures over time, including Greek, Roman, Venetian, and Austro-Hungarian. 
            The people of Croatia are known as Croatians and their culture is rich in music, art, and cuisine. 
            The country is also known for its national parks, such as Plitvice Lakes National Park, and is a 
            popular destination for tourists seeking history, culture, and natural beauty.`,
            image: "images/croatia.jpg"
        },
        {
            id: 6,
            name: "Bermuda",
            description: `Bermuda is a British Overseas Territory located in the North Atlantic Ocean, about 
            1,000 kilometers east of the United States. The territory is made up of about 181 islands, with 
            the largest being Bermuda Island, also known as Main Island. The territory is known for its pink 
            sand beaches, crystal-clear waters, and vibrant marine life. The capital of Bermuda is Hamilton, 
            located on Main Island. Bermuda's history dates back to the early 17th century, when it was settled 
            by the English. The territory has also been influenced by African, Native American, and Portuguese 
            cultures over time. The people of Bermuda are known as Bermudians and their culture is characterized 
            by traditional dance, music, and cuisine, including dishes such as fish chowder and cassava pie. 
            Bermuda is also known for its offshore financial industry and is a popular destination for tourists 
            seeking sun, sand, and relaxation.`,
            image: "images/bermuda.jpg"
        }
    ]
}

/*------------------Export-Data--------------------------------------*/

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.helpfulTips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}