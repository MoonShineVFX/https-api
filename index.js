var express     = require('express');
var herokuProxy = require('heroku-proxy');
var app         = express();

app.use(herokuProxy({
    hostname: 'work.moonshine.tw',
    port    : 9978,
    prefix  : 'goto',
    protocol: 'http'
}));
