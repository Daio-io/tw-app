
var TwModel = require('../model/tw.model');

exports.getHome = function *() {

    var tws = yield TwModel.find().exec();
    
    yield this.render('home', {

        title: 'Tw@\'s'

    });

};