(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope', 'MenuDataService'];
    function SignUpController($scope, MenuDataService) {
        var signUpCtrl = this;

        signUpCtrl.user = {};
        signUpCtrl.submit = function () {
            if ($scope.signUpForm.$valid) {
                var menuNumber = signUpCtrl.user.favoriteMenuNumber;
                var url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/${menuNumber}.json`;

                MenuDataService.getMenuItem(url).then(function (response) {
                    if (response.data === null) {
                        signUpCtrl.errorMessage = "No such menu number exists.";
                    } else {
                        signUpCtrl.successMessage = "Your information has been saved.";
                        // Save the user's info in a service
                        MenuDataService.saveUserInfo(signUpCtrl.user);
                    }
                });
            }
        };
    }
})();
