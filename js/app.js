var app = angular.module('kelsieApp', ['ngRoute', 'ui.router', 'ngAnimate'])

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './view/home.html'
    })

    // .state('home', {
    //   url: '/',
    //   templateUrl: './view/home.html'
    // })
    //
    // .state('home', {
    //   url: '/',
    //   templateUrl: './view/home.html'
    // })

    .state('blog', {
      url: '/blog',
      templateUrl: './view/blog.html',
      controller: 'slideShowCtrl'
    })

    $urlRouterProvider
      .otherwise('/');
  })
