var request = require('request');
var cheerio = require('cheerio');
var scheduleUrl = 'http://ab2015.anadolu.edu.tr/index.php?menu=5&submenu=28';
exports.index = function (req, res) {
  res.json({date: new Date()});
};

exports.schedule = function (req, res, next) {
  request(scheduleUrl, function (err, response, body) {
    if (err) {
      return next(err);
    }
    if (response.statusCode !== 200) {
      return next(new Error('Server Error'));
    }
    var $ = cheerio.load(body);
    var titles = $('table td a').map(function (i, e) {
      return $(e).text();
    }).get();
    return res.json({titles: titles});
  });
};