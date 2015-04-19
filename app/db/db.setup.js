'use strict';

var mongoose = require('mongoose');
var config = require('./db.config');

module.exports = function () {

    switch (process.env.IO_ENV) {
        case 'live':

            mongoose.connect(config.prod.connectionString, config.prod.options);
            break;

        default:

            mongoose.connect(config.dev.connectionString, config.dev.options);
            break;

    }

};