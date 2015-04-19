var homeHandlers = require('./home.handlers');
var router = require('koa-router')();

router.get('/', homeHandlers.getHome);

module.exports = router;