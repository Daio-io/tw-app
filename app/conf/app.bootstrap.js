var hbs = require('koa-handlebars');
var settings = require('./app.settings');
var dbConnect = require('../db/db.setup');

module.exports = function (app) {

    dbConnect();
    
    app.use(hbs(
        {
            layoutsDir: 'app/layouts',
            viewsDir: 'app/layouts/views',
            partialsDir: 'app/layouts/partials',
            defaultLayout: 'main',
            cache: settings.templateCache
        }
    ));

};