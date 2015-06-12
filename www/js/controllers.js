angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('LoginCtrl', function($scope, $state){
  
$state.go('tabs.notificaciones');
  var objeto = {
    usuario: 'Jonathan',
    password: '123'
  }
  $scope.data = {};
  $scope.login = function() {
      console.log($scope.data.username, $scope.data.password);
      debugger;
      if ($scope.data.username == objeto.usuario && $scope.data.password == objeto.password) {
        $state.go('tabs.notificaciones');
      } else {
        alert("Nop, no puedes entrar");
      }
      
      // LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
      //     $state.go('tab.dash');
      // }).error(function(data) {
      //     var alertPopup = $ionicPopup.alert({
      //         title: 'Login failed!',
      //         template: 'Please check your credentials!'
      //     });
      // });
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}).controller('varios', function($scope, $ionicPopover,$state) {
  
  $scope.cambio = function(){
    $state.go('tabs.ajustes2');
  };


  $ionicPopover.fromTemplateUrl('templates/SubAreas.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popoverSubAreas = popover;
  });

  $ionicPopover.fromTemplateUrl('templates/SubAreasNuevo.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popoverSubAreasNuevo = popover;
  });



  $scope.openPopoverSubAreas = function($event) {
    $scope.popoverSubAreas.show($event);
  };

  $scope.openPopoverSubAreasNuevo = function($event) {
    $scope.popoverSubAreasNuevo.show($event);
  };

  /*$scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });*/
});



