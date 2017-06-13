'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockServer = require('./mock-server.js');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// if (process.env.APP_ENV === 'MOCK') {
//     mockServer();
// } else {
//     mockServer();
// };

app.listen(process.env.PORT || 8080, () => console.log('server is running'));
