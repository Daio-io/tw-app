var hbs = require('koa-handlebars');
var settings = require('./app.settings');

module.exports = function (app) {

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