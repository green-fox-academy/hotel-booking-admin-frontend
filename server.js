'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockServer = require('./mock-server.js');

const app = express();

app.use(express.static(__dirname + '/dist'));

if (process.env.APP_ENV === 'MOCK') {
    console.log(process.env.APP_ENV);
    mockServer();
} else {

}

app.listen(process.env.PORT || 3000, () => console.log('server is running'));
