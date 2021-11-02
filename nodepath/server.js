const { Mongoose } = require('mongoose');

const express = require('express'),
    app = express(),
    port = process.env.PORT || 1400
    routes = require('./routes.js');
    mongoose = require('mongoose'),
    User = require('./models/UserModel')

mongoose.connect('mongodb://localhost/users_db');

routes(app);
app.listen(port);