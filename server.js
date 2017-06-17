'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockServer = require('./mock-decorator.js');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

if (process.env.APP_ENV === 'MOCK') {
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
    mockServer(app);
} else {
    app.use(express.static(__dirname + '/src/app'));
    mockServer(app);
}

app.listen(process.env.PORT || 8080, () => console.log('server is running'));
