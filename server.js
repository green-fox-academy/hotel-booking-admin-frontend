'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockServer = require('./mock-server.js');

const app = express();

app.use(express.static(__dirname + '/dist'));

console.log('alma?????');
if (process.env.APP_ENV === 'MOCK') {
    mockServer();
    console.log('alma');
} else {
    console.log('korte');
};

app.listen(process.env.PORT || 8080, () => console.log('server is running'));
