'use strict';

const MockServer = function(app) {
    const path = require('path');
    
    const user = {
        email: 'test@example.com',
        password: '1234'
    };
    
    let user2 = {
        email: string,
        password: string,
    }

    let hotel = {
        links: {
            self: 'https://your-hostname.com/hotels/1'
        },
        data: {
            type: 'hotels',
            id: '1',
            attributes: {
                location: 'Budapest',
                name: 'Hotel Ipoly utca',
                has_wifi: true,
                has_parking: true,
                has_pets: true,
                has_restaurant: true,
                has_bar: true,
                has_swimming_pool: true,
                has_air_conditioning: true,
                has_gym: true,
                meal_plan: 'american-plan',
                stars: 5
            }
        }
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

    if (process.env.APP_ENV === 'MOCK') {
        app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));
    } else {
        app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/src/index.html')));
    }
    
    app.post('/api/login/', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        if (email === user.email && password === user.password || email === user2.email && password === user2.password) {
            res.send(validResponse);
        } else {
            res.status(400).send(invalidResponse);
        }
    });

    app.post('/api/register/', (req, res) => {
        regResponse.data.type = req.body.data.type
        regResponse.data.attributes.email = req.body.data.attributes.email;

        user2.email = req.body.data.attributes.email;
        user2.password = req.body.data.attributes.password;

        res.send(regResponse);
    });

    app.post('/hotel/', (req, res) => {
        regResponse.data.type = req.body.data.type
        regResponse.data.attributes.email = req.body.data.attributes.email;

        user2.email = req.body.data.attributes.email;
        user2.password = req.body.data.attributes.password;

        res.send(regResponse);
    });
}

module.exports = MockServer;
