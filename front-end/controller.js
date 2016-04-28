var studentApp = angular.module('studentApp', []);
studentApp.controller('studentController', function($scope, $http){

	var apiUrl = "http://localhost:3050/students";
	$http({method: 'GET', url: apiUrl}).then(
		function successCallback(response){
			$scope.studentList = response.data;
		}, function errorCallback(response){
			console.log(response);
			$scope.studentList = response;
		}
	);

	$scope.sortAlph = function(){
		var apiUrl = "http://localhost:3050/students";
		$http({method: 'GET', url: apiUrl}).then(
			function successCallback(response){
				$scope.studentList = response.data;
			}, function errorCallback(response){
				console.log(response);
				$scope.studentList = response;
			}
		);		
	}

	$scope.reverseSort = function(){
		var apiUrl = "http://localhost:3050/students/reverse";
		$http({method: 'GET', url: apiUrl}).then(
			function successCallback(response){
				$scope.studentList = response.data;
			}, function errorCallback(response){
				console.log(response);
				$scope.studentList = response;
			}
		);		
	}

});