'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockServer = require('./mock-server.js');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/info', (req, res) => {
    res.send(process.env.APP_ENV);
});

if (process.env.APP_ENV === 'MOCK') {
    // mockServer();
    const user = {
        username: 'Test Admin',
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

    app.use(bodyParser.json());

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    });

    app.get('/api/login/', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        if (username === user.username && password === user.password) {
            res.send(validResponse);
        } else {
            res.send(invalidResponse);
        }
    });
} else {
    // mockServer();
};

app.listen(process.env.PORT || 8080, () => console.log('server is running'));
