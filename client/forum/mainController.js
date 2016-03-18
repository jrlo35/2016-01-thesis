var app = angular.module('app')

app.controller('MainForumController', ['$scope', '$window', 'forumFactory', function($scope, $window, forumFactory){

  $scope.topic = {};
  $scope.topic.username = $window.localStorage.getItem('com.tp.username');
  $scope.topic.userId = $window.localStorage.getItem('com.tp.userId');

  $scope.openModal = function(){
    $('#createForumPost').openModal();
  }

  $scope.createTopic = function(topic){
    forumFactory.addNewTopic(topic).then(function(err, res){
      if(err){console.log(err)}
    })
  }

}])