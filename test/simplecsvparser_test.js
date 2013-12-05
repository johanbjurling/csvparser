'use strict';

var csvparser = require('../lib/simplecsvparser.js');

exports.parse = function(test) {
  var testString = "a;b;c;\n1;2;3";
  var delimiter = ";";
  var result = csvparser.parse(testString, delimiter);
  test.equal(result[0].a, 1);
  test.equal(result[0].b, 2);
  test.equal(result[0].c, 3);
  test.done();
};
