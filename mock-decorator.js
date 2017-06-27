'use strict';

const MockServer = function(app) {
    const path = require('path');

    const user = {
        email: 'test@example.com',
        password: '1234'
    };

    let user2 = {
        email: '',
        password: '',
    };

    const validResponse = {
        data: {
            type: 'auth',
            attributes: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk'
            }
        }
    };

    const invalidResponse = {
        errors: {
            status: 400,
            title: 'Bad Request',
            detail: 'Mismatched email and password'
        }
    };

    const regResponse = {
        data: {
            type: '',
            attributes: {
                id: 2,
                email: '',
                admin: 'true',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUub3JnIiwiYWRtaW4iOmZhbHNlfQ.UK8Z1BNeHWvaFElWrrSxhO6oxTRaMW_66DO5yjkqOhM'
            }
        }
    };

    let hotelResponseOne = {
        links: {
            self: 'https://cake-cup.glitch.me/hotels/1'
        },
        data: {
            type: 'hotels',
            id: '1',
            attributes: {
                location: 'Bone City',
                name: 'Dog Heaven',
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

    let hotelResponseTwo = {
        links: {
            self: 'https://cake-cup.glitch.me/hotels/2'
        },
        data: {
            type: 'hotels',
            id: '2',
            attributes: {
                location: 'near Sirius',
                name: 'Space Hotel',
                main_image_src: 'https://placebear.com/200/300',
                has_wifi: true,
                has_parking: true,
                has_pets: true,
                has_restaurant: true,
                has_bar: true,
                has_swimming_pool: false,
                has_air_conditioning: true,
                has_gym: true,
                meal_plan: 'continental plan',
                user_id: '1',
                booking_id: '1',
                amount: '50',
                currency: 'USD',
                status: 'pending',
                stars: '5'
            }
        }
    };

    let hotelResponse = {
        links: {
            self: 'https://cake-cup.glitch.me/hotels/3'
        },
        data: {
            type: 'hotels',
            id: '3',
            attributes: {
                location: '',
                name: '',
                main_image_src: 'https://placebear.com/200/300',
                has_wifi: false,
                has_parking: false,
                has_pets: false,
                has_restaurant: false,
                has_bar: false,
                has_swimming_pool: false,
                has_air_conditioning: false,
                has_gym: false,
                meal_plan: '',
                user_id: '1',
                booking_id: '1',
                amount: '50',
                currency: 'USD',
                status: 'pending',
                stars: ''
            }
        }
    }

    const hotels = [hotelResponseOne, hotelResponseTwo]

    const hotelError = {
        errors: {
            status: '404',
            title: 'Not Found',
            detail: 'No hotels found by id: 1'
        }
    }

    if (process.env.APP_ENV === 'MOCK') {
        app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));
    } else {
        app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/src/index.html')));
    }

    app.post('/api/login/', (req, res) => {
        const email = req.body.data.attributes.email;
        const password = req.body.data.attributes.password;
        if ((email === user.email && password === user.password) || (email === user2.email && password === user2.password)) {
            res.send(validResponse);
        } else {
            res.status(400).send(invalidResponse);
        }
    });

    app.post('/api/register/', (req, res) => {
        regResponse.data.type = req.body.data.type;
        regResponse.data.attributes.email = req.body.data.attributes.email;
        user2 = Object.assign(req.body.data.attributes);
        res.send(regResponse);
    });

    app.get('/hotels/', (req, res) => {
        res.send(hotels);
    });

    app.post('/hotels/', (req, res) => {
        hotelResponse.data = Object.assign(req.body.data);
        hotels.push(hotelResponse);
        res.status(201).send(hotelResponse);
    });

    app.get('/hotels/:id', (req, res) => {
        const hotelID = req.params.id;
        hotels.forEach((hotel) => {
            if (hotelID === hotel.data.id) {
                res.status(200).send(hotel);
            }
        });
        res.status(404).send(hotelError);
    });

    app.delete('/hotels/:id', (req, res) => {
        const hotelID = req.params.id;
        hotels.forEach((hotel) => {
            if (hotelID === hotel.data.id) {
                res.status(200).send(hotel.links.self);
                hotel = {};
            }
        });
        res.status(404).send(hotelError);
    });

    app.patch('/hotels/:id', (req, res) => {
        const hotelID = req.params.id;
        hotels.forEach((hotel) => {
            if (hotelID === hotel.data.id) {
                hotel.data = Object.assign(req.body.data);
                res.status(200).send(hotel);
            }
        });
        res.status(404).send(hotelError);
    });
};

module.exports = MockServer;
