angular.module('FactsPerYearApp.services', []).
  factory('apiService', function($http) {

    var apiData = {};

    apiData.getData = function(formData) {
      return $http({
        method: 'JSONP',
        url: 'http://numbersapi.com/'+formData+'/math?callback=JSON_CALLBACK'
      });
    }

    return apiData;
  });
