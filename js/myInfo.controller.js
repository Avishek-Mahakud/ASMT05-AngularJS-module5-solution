(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuDataService'];
    function MyInfoController(MenuDataService) {
        var myInfoCtrl = this;
        myInfoCtrl.user = MenuDataService.getUserInfo();

        if (!myInfoCtrl.user) {
            myInfoCtrl.message = "Not Signed Up Yet. <a href='#/signUp'>Sign up Now!</a>";
        } else {
            // Retrieve favorite menu item details if necessary
        }
    }
})();
