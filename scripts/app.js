var Offices = angular.module("Offices", []);

Offices.controller('officeListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get("offices/offices.json")
        .then(function(response) {
            $scope.offices = response.data;
        });

    $scope.showEditOffice = false;

}]);

Offices.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713 Primary HQ' : '';
    };
})