'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockServer = require('./mock-server.js');

const app = express();

app.use(express.static(__dirname + '/dist'));

console.log('alma?????');
if (process.env.APP_ENV === 'MOCK') {
    console.log(process.env.APP_ENV);
    console.log('alma');
    mockServer();
} else {
    console.log(process.env.APP_ENV);
    console.log('no alma');
    mockServer();
}

app.listen(process.env.PORT || 8080, () => console.log('server is running'));
