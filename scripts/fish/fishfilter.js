// Import the function that returns a copy of the fish array
import { getFish } from '../database.js'

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish

    const fishData = getFish()
    let holyFish = []

    for (let fish of fishData) {
        if (fish.size % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const fishData = getFish()
    let soldiers = []
    for (let fish of fishData) {
        if (fish.size % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const fishData = getFish()
    let regularFish = [];

    for (let fish of fishData) {
        if (fish.size % 5 !== 0 && fish.size % 3 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}