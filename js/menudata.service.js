(function () {
    'use strict';

    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;
        var userInfo = null;

        service.getMenuItem = function (url) {
            return $http.get(url);
        };

        service.saveUserInfo = function (user) {
            userInfo = user;
        };

        service.getUserInfo = function () {
            return userInfo;
        };
    }
})();
