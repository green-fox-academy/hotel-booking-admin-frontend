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
    }


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
    }

    let hotelResponse = {
        links: {
            self: 'https://your-hostname.com/hotels/1'
        },
        data: {
            type: 'hotels',
            id: '1',
            attributes: {
                location: false,
                name: false,
                has_wifi: false,
                has_parking: false,
                has_pets: false,
                has_restaurant: false,
                has_bar: false,
                has_swimming_pool: false,
                has_air_conditioning: false,
                has_gym: false,
                meal_plan: false,
                stars: ''
            }
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

        user2.email = req.body.data.attributes.email;
        user2.password = req.body.data.attributes.password;

        res.send(regResponse);
    });

    app.post('/hotels/', (req, res) => {
        hotelResponse.data.type = req.body.data.type;
        hotelResponse.data.attributes.location = req.body.data.attributes.location;
        hotelResponse.data.attributes.name = req.body.data.attributes.name;
        hotelResponse.data.attributes.has_wifi = req.body.data.attributes.has_wifi;
        hotelResponse.data.attributes.has_parking = req.body.data.attributes.has_parking;
        hotelResponse.data.attributes.has_pets = req.body.data.attributes.has_pets;
        hotelResponse.data.attributes.has_restaurant = req.body.data.attributes.has_restaurant;
        hotelResponse.data.attributes.has_bar = req.body.data.attributes.has_bar;
        hotelResponse.data.attributes.has_swimming_pool = req.body.data.attributes.has_swimming_pool;
        hotelResponse.data.attributes.has_air_conditioning = req.body.data.attributes.has_air_conditioning;
        hotelResponse.data.attributes.has_gym = req.body.data.attributes.has_gym;
        hotelResponse.data.attributes.meal_plan = req.body.data.attributes.meal_plan;
        hotelResponse.data.attributes.stars = req.body.data.attributes.stars;

        res.status(201).send(hotelResponse);
    });
}

module.exports = MockServer;
