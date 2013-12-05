"use strict";

exports.parse = function(csvString, delimiter) {
  
  var result = [];
  var csvArray = csvString.split("\n");

  var firstRow = csvArray.shift();

  var columnKeys = firstRow.split(delimiter);

  csvArray.forEach(function(csvRow) {
    var csvRowArray = csvRow.split(delimiter);
    var jsonRow = new Object();

    for (var colNum = 0; colNum < csvRowArray.length; colNum++) {
      var colData 
      jsonRow[columnKeys[colNum]] = csvRowArray[colNum];
    }
    result.push(jsonRow);
  });

  return result;
};

