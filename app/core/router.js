var express = require('express');
var fs = require('fs');

var controllers = {};
var controllersPath = process.cwd() + '/app/controllers';
fs.readdirSync(controllersPath).forEach(function (file) {
  if (file.match(/\.js$/)) {
    controllers[file.split('.')[0].toLowerCase()] =
      require(controllersPath + '/' + file);
  }
});

module.exports = function (app) {
  var router = express.Router();
  router.route('/').get(controllers.main.index);
  router.route('/schedule').get(controllers.main.schedule);
  app.use(router);
};