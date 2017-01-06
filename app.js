/**
 * Created by jp on 06/01/17.
 */
var express = require('express');
var path = require('path');

var index = require('./routes/index');

var app = express();

app.locals.appName = 'My Printing App';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);

module.exports = app;