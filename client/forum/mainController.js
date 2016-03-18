var app = angular.module('app')

app.controller('MainForumController', ['$scope', '$window', function($scope, $window){

  $scope.topic = {};
  $scope.topic.username = $window.localStorage.getItem('com.tp.username');

  $scope.openModal = function(){
    $('#createForumPost').openModal();
  }

  $scope.createTopic = function(topic){
    console.log('NEW TOPIC:', topic)
  }

}])