(function () {
    'use strict';

    angular.module('MenuApp', ['ui.router'])
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.template.html'
        })
        .state('signUp', {
            url: '/signUp',
            templateUrl: 'templates/signUp.template.html',
            controller: 'SignUpController as signUpCtrl'
        })
        .state('myInfo', {
            url: '/myInfo',
            templateUrl: 'templates/myInfo.template.html',
            controller: 'MyInfoController as myInfoCtrl'
        });
    }
})();
