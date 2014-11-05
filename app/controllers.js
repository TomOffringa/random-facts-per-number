var INTEGER_REGEXP = /^\-?\d+$/;

angular.module('FactsPerYearApp.controllers', []).
  controller('yearsController', function($scope, apiService) {
    //$scope.nameFilter = null;
    $scope.getData = [];
    $scope.formData = {};

    $scope.processForm = function() {


        if (INTEGER_REGEXP.test($scope.formData.favoriteYear)) {
          // it is valid
          apiService.getData($scope.formData.favoriteYear).success(function (response) {
              //Dig into the responde to get the relevant data
              $scope.result = response;
          });
        } else {
          $scope.result = 'Enter a valid number';
        }

    };

  });
