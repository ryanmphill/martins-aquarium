// Import the FishList function from the correct module
import { FishList } from './fish/Fishlist.js'
import { tipList } from './tips/tipList.js'
import { locationList } from './locations/locationList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish? -- .fishy__container

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLlist = FishList()
const tipHTMLlist = tipList()
const locationHTMLlist = locationList()

const parentHTMLElement = document.querySelector("#fishMain")


parentHTMLElement.innerHTML = `
<article class="fishy">
  ${fishHTMLlist}
  ${tipHTMLlist}
</article>

<article class="location">
  <h2 class="body__header location__header">Explore Exotic Locations Where Martin Harvests His Fish</h2>
  <section class="location__quotes">
    <h4 class="location__quotehead">Wise words to help you along your scuba journey</h4>
    <ul class="location__quotelist">
      <li>"The sea, once it casts its spell, holds one in its net of wonder forever." - Jacques Cousteau</li>
      <li>"In every outthrust headland, in every curving beach, in every grain of sand, there is the story of the earth." - Rachel Carson</li>
      <li>"The sea is everything. It covers seven-tenths of the terrestrial globe. Its breath is pure and healthy. It is an immense desert where a man is never alone, for he can feel life quivering all about him." - Jules Verne</li>
      <li>"The ocean stirs the heart, inspires the imagination, and brings eternal joy to the soul." - Robert Wyland</li>
    </ul>
  </section>
  ${locationHTMLlist}              
</article>
`

/*----------------------------------------------------------------------------------*/
//Console log data
import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
