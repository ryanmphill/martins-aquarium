// Import the FishList function from the correct module
import { FishList } from './fish/Fishlist.js'

/*
    What is the CSS selector for the element where you
    want to display the fish? -- .fishy__container

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishy__container")


parentHTMLElement.innerHTML = FishList()

/*----------------------------------------------------------------------------------*/

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
