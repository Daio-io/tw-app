exports.getHome = function *() {

    yield this.render('home', {

        title: 'Tw@\'s'

    });

};