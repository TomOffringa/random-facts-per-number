var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);

'use strict';

angular.module('FactsPerYearApp', [
  'FactsPerYearApp.controllers',
  'FactsPerYearApp.services'
]);
