'use strict';

const MockServer = function(app) {
    const path = require('path');
    const user = {
        email: 'test@example.com',
        password: '1234'
    };
    const validResponse = {
        status: 'ok',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk'
    };

    const invalidResponse = {
        status: 'error',
        message: 'Mismatched username and password'
    };

    app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));

    app.post('/api/login/', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        if (username === user.username && password === user.password) {
            res.send(validResponse);
        } else {
            res.send(invalidResponse);
        }
    });
}

module.exports = MockServer;
