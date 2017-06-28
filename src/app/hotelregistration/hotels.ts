export class Hotel {
    data = {
        type: 'hotels',
        id: '',
        attributes: {
            location: '',
            name: '',
            main_image_src: '',
            has_wifi: '',
            has_parking: '',
            has_pets: '',
            has_restaurant: '',
            has_bar: '',
            has_swimming_pool: '',
            has_air_conditioning: '',
            has_gym: '',
            meal_plan: '',
            user_id: '',
            booking_id: '',
            amount: '',
            currency: '',
            status: '',
            stars: ''
        }
    };

    hotelList = [];
    hotelwithID2; 

    hotelwithID = {
        links: {
            self: 'https://cake-cup.glitch.me/hotels/1'
        },
        data: {
            type: 'hotels',
            id: '33',
            attributes: {
                location: 'Bone City',
                name: 'WHaaaaat?????',
                main_image_src: 'https://placebear.com/200/300',
                has_wifi: true,
                has_parking: false,
                has_pets: true,
                has_restaurant: false,
                has_bar: false,
                has_swimming_pool: false,
                has_air_conditioning: false,
                has_gym: true,
                meal_plan: 'american plan',
                user_id: '1',
                booking_id: '1',
                amount: '50',
                currency: 'USD',
                status: 'pending',
                stars: '3'
            }
        }
    };
}
