
// Import the function that returns a copy of the fish array
/* import { getFish } from '../database.js' */ //can delete once it works
import { mostHolyFish } from './fishfilter.js'
import { soldierFish } from './fishfilter.js'
import { nonHolyFish } from './fishfilter.js'

export const FishList = () => {
    // Invoke the functions that you made to filter the fish by number
    const firstFish = mostHolyFish()
    const secondFish = soldierFish()
    const lastFish = nonHolyFish() 

    // Start building a string filled with HTML syntax
    let htmlString = `<div class ="fishy__container">
    <h2 class="body__header fishy__header">Fish Details</h2>
    <div class="fishy__cardsection">`

    // display the fish with length divisible by 3
    for (const fish of firstFish) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishy__card">
        <img src="${fish.image}" alt="bellus anglefish" class="fishy__img">
        <h3 class="fishy__species">${fish.species}</h3>
        <p class="fishy__info">Length: ${fish.size} in.</p>
        <p class="fishy__info">Harvested from: ${fish.origin}</p>
        <p class="fishy__info">Diet: ${fish.food}</p>
        <p class="fishy__info">Name: ${fish.name}</p>
      </section>
`
    }
    // Filter out fish that are divisible by both 5 and 3 to avoid duplicates
    for (let i = 0; i < secondFish.length; i++) {
      for (let item of firstFish) {
        if (item.name === secondFish[i].name) {
          secondFish.splice(i, 1)
        }
      }
    }
    // Display fish divisible by 5, but not if they are also divisible by 3
    for (const fish of secondFish) {

      
      htmlString += `<section class="fishy__card">
      <img src="${fish.image}" alt="bellus anglefish" class="fishy__img">
      <h3 class="fishy__species">${fish.species}</h3>
      <p class="fishy__info">Length: ${fish.size} in.</p>
      <p class="fishy__info">Harvested from: ${fish.origin}</p>
      <p class="fishy__info">Diet: ${fish.food}</p>
      <p class="fishy__info">Name: ${fish.name}</p>
    </section>
`
    }
    
    // Display the rest of the fish
    for (const fish of lastFish) {

      
      htmlString += `<section class="fishy__card">
      <img src="${fish.image}" alt="bellus anglefish" class="fishy__img">
      <h3 class="fishy__species">${fish.species}</h3>
      <p class="fishy__info">Length: ${fish.size} in.</p>
      <p class="fishy__info">Harvested from: ${fish.origin}</p>
      <p class="fishy__info">Diet: ${fish.food}</p>
      <p class="fishy__info">Name: ${fish.name}</p>
    </section>
`
    }

    htmlString += `  </div>
    </div>`

    return htmlString
}



/*----------------------------------------------------------------------*/
/*
<div class="fishy__cardsection">
            <section class="fishy__card">
              <img src="images/bellus_anglefish.jpg" alt="bellus anglefish" class="fishy__img">
              <h3 class="fishy__species">Bellus Anglefish</h3>
              <p class="fishy__info">Fish Length: 18cm</p>
              <p class="fishy__info">Harvested from: Tahiti</p>
              <p class="fishy__info">Fish Diet: Plankton</p>
              <p class="fishy__info">Fish Name: Donovan</p>
            </section>

            <section class="fishy__card">
              <img src="images/dragonfacepipefish.jpg" alt="pipefish" class="fishy__img">
              <h3 class="fishy__species">Dragonface Pipefish</h3>
              <p class="fishy__info">Fish Length: 19.8cm</p>
              <p class="fishy__info">Harvested from: Vanuatu Islands</p>
              <p class="fishy__info">Fish Diet: Tiny crustaceans</p>
              <p class="fishy__info">Fish Name: Cowboy</p>
            </section>

            <section class="fishy__card">
              <img src="images/formosa_wrasse.jpg" alt="Formosa Wrasse" class="fishy__img">
              <h3 class="fishy__species">Formosa Wrasse</h3>
              <p class="fishy__info">Fish Length: 50cm</p>
              <p class="fishy__info">Harvested from: Sri Lanka</p>
              <p class="fishy__info">Fish Diet: Tiny crustaceans</p>
              <p class="fishy__info">Fish Name: Mr. Gills</p>
            </section>

            <section class="fishy__card">
              <img src="images/mandarinfish.jpg" alt="Mandarinfish" class="fishy__img">
              <h3 class="fishy__species">Mandarinfish</h3>
              <p class="fishy__info">Fish Length: 6cm</p>
              <p class="fishy__info">Harvested from: RyuKyu Islands</p>
              <p class="fishy__info">Fish Diet: Small crustaceans and other invertebrates</p>
              <p class="fishy__info">Fish Name: Vincent</p>
            </section>
          </div>

          */