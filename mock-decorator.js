'use strict';

const MockServer = function(app) {
    const path = require('path');
    const user = {
        email: 'test@example.com',
        password: '1234'
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
            type: 'user',
            attributes: {
                id: 1,
                email: 'john.doe@example.org',
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
        if (email === user.email && password === user.password) {
            res.send(validResponse);
        } else {
            res.status(400).send(invalidResponse);
        }
    });

    app.post('/api/register/', (req, res) => {
        const type = req.body.data.type
        const email = req.body.attributes.email;
        const password = req.body.attributes.password;
        res.send(regResponse);
    });
}

module.exports = MockServer;
