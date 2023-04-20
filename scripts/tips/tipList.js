// Import function that gets data from the helpfulTips array
import { getTips } from '../database.js'

export const tipList = () => {

    const helpfulTips = getTips()

    let htmlString = `<aside class="fishy__careInfo">
    <h2 class="body__header fishy__careInfoheader">Aquarium Tips</h2>
    <ul class="fishy__carelist">`

    for (let tipObject of helpfulTips) {
        htmlString += `  <li>${tipObject.tip}</li>`
    }

    htmlString += `  </ul>`
    htmlString += `</aside>`

    return htmlString
}