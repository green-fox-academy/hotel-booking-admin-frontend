'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockServer = require('./mock-server.js');

const app = express();

// const forceSSL = function() {
//     return function (req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(
//                 ['https://', req.get('Host'), req.url].join('')
//             );
//         }
//     next();
//     }
// }

// app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));

console.log('alma?????');
if (process.env.APP_ENV === 'MOCK') {
    console.log(process.env.APP_ENV);
    console.log('alma');
    mockServer();
} else {
    console.log(process.env.APP_ENV);
    console.log('no alma');
}

app.listen(process.env.PORT || 3000, () => console.log('server is running'));
