// Import function that gets data from the locations array
import { getLocations } from '../database.js'

export const locationList = () => {
    const locations = getLocations()

    let htmlString = ``

    for (let location of locations) {
        htmlString += `<section class="location__card">
        <img src="${location.image}" alt="${location.name}" class="location__img">
        <div class="location__details">
          <h3 class="location__header">${location.name}</h3>
          <p>
            ${location.description}
          </p>
        </div>
      </section>`
    }

    return htmlString
}