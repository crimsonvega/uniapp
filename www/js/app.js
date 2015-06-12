angular.module('App', ['ionic', 'starter.controllers'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
       url: '/login',
       templateUrl: 'views/login/login.html',
       controller: 'LoginCtrl'
     })
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'views/tabs/tabs.html'
    })
    .state('tabs.notificaciones', {
      url: '/notificaciones',
      views: {
        'notificaciones-tab': {
          templateUrl: 'views/notificaciones/notificaciones.html',
        }
      }
    })
    .state('tabs.favoritos', {
      url: '/favoritos',
      views: {
        'favoritos-tab': {
          templateUrl: 'views/favoritos/favoritos.html'
        }
      }
    })
    .state('tabs.calendario', {
      url: '/calendario',
      views: {
        'calendario-tab': {
          templateUrl: 'views/calendario/calendario.html'
        }
      }
    })
  .state('tabs.informacion', {
      url: '/informacion',
      views: {
        'informacion-tab': {
          templateUrl: 'views/informacion/informacion.html'
        }
      }
    })
  .state('tabs.ajustes', {
      url: '/ajustes',
      views: {
        'ajustes-tab': {
          templateUrl: 'views/ajustes/ajustes.html',
           controller: 'varios'
        }
      }
    })
  .state('tabs.ajustesNuevo', {
      url: '/ajustesNuevo',
      views: {
        'ajustes-tab': {
          templateUrl: 'views/ajustes/Agregar.html',
          controller: 'varios'
        }
      }
    })

  $urlRouterProvider.otherwise('/login');
})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});