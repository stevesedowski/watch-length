var textApp = angular.module('textApp', []);

textApp.controller('textCtrl', function ($scope) {
  var numAllowed = 140;
  
  
  $scope.remaining = numAllowed;
  $scope.$watch('message', function() {
    $scope.remaining = numAllowed - $scope.message.length;
    if ($scope.message.length > 140) {
       $scope.setColor = 'red'; 
       $scope.textLength = true;
    } else {
      $scope.setColor = 'black';
    }
  });
});