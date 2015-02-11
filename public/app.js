

/* App Module */

var bookSearchApp = angular.module('jbApp', []);

    bookSearchApp.controller('BookSearchCtrl',function($scope,$http)
    {
      $scope.welcome = 'Hello, Search Books For Reading!';
      $http({method: 'GET', url: '/example.json'}).success(function(data)
      {
        $scope.books = data; // response data 
      });
    });
  