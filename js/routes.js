(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Default route
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
