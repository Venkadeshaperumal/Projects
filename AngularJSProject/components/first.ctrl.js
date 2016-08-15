(function () {
	"use strict";
	angular.module("webApp")
			.controller("firstContrl",function($scope, $mdSidenav, $http) {
				
                $http.get('data/classifields.json').then(function(classifields) {
                    $scope.classifields = classifields.data;
//                    console.log(classifields.data);
                });
                
				$scope.openSideNav = function() {
					$mdSidenav('left').open();
				};

				$scope.openCloseNav = function() {
					$mdSidenav('left').close();
				};
        
                $scope.saveClassifield = function(classifield) {
                  if(classifield) {
                    $scope.classifields.push(classifield);
                    $scope.classifield = {};
                  }
                    $scope.openCloseNav();
                }

			});
})();