'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockServer = require('./mock-decorator.js');
const path = require('path');

const app = express();

const forceSSL = () => {
    return (req, res, next) => {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
};

app.use(forceSSL());

app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.json());

if (process.env.APP_ENV === 'MOCK') {
    mockServer(app);
} else {
    mockServer(app);
}

app.listen(process.env.PORT || 8080, () => console.log('server is running'));
