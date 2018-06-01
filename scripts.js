var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("https://newsapi.org/v2/everything?sources=the-economist&apiKey=056a5a7c6f344f19a2742d8f4de34d9f")
  .then(function(response) {
      $scope.myWelcome = response.data.articles;
      console.log($scope.myWelcome);
  });
});

