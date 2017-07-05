'use strict'

const createHotels = () => {
    const loc = ['New York', 'London', 'Budapest', 'Berlin', 'Sirius', 'Mars', 'Mirkwood', 'Coruscant', 'Tatooine', 'Yavin 4']

    const name = ['Castle Black Hostel', 'Vader Hotel', 'Anakin SkyHotel', 'Hotel Rivendel', 'Hotel Isengard', 'Hotel Minas Tirith', 'Hotel Firefly', 'Java Hotel', 'Inn to the Millenum Falcon', 'Hotel KhazadDom']

    const randomTrueOrFalse = () => {
        const number = Math.floor(Math.random() * (1 - 0 + 1)) + 0
        if (number === 1) {
            return true
        } else {
            return false
        }
    }

    const randomStar = () => {
        return Math.floor(Math.random() * (5 - 0 + 1)) + 0
    }

    const randomName = () => {
        const number = Math.floor(Math.random() * (9 - 0 + 1)) + 0
        return name[number]
    }

    const randomLoc = () => {
        const number = Math.floor(Math.random() * (9 - 0 + 1)) + 0
        return loc[number]
    }

    const setAttributes = () => {
        return {
            location: randomLoc(),
            name: randomName(),
            main_image_src: 'https://placebear.com/300/300',
            has_wifi: randomTrueOrFalse(),
            has_parking: randomTrueOrFalse(),
            has_pets: randomTrueOrFalse(),
            has_restaurant: randomTrueOrFalse(),
            has_bar: randomTrueOrFalse(),
            has_swimming_pool: randomTrueOrFalse(),
            has_air_conditioning: randomTrueOrFalse(),
            has_gym: randomTrueOrFalse(),
            meal_plan: 'american plan',
            user_id: randomStar() + 1,
            booking_id: '1',
            amount: '50',
            currency: 'USD',
            status: 'pending',
            stars: randomStar()
        }
    }

    return {
        setAttributes
    }
}

module.exports = createHotels
