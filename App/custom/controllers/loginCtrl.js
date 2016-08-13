(function() {
    'use strict';

    mytaskApp.controller("loginCtrl", ['$scope', '$log', '$location', 'uiRouters', '$uibModal', loginCtrl]);

    function loginCtrl($scope, $log, $location, uiRouters, $uibModal) {
        var vm = $scope;
        vm.signFormData = {};
        vm.isDisplay = false;

        vm.changeView = function(){
            vm.isDisplay = !vm.isDisplay;
        }
        $scope.createuser = function(size) {


            $location.url(uiRouters.createuseraccount);
            //$scope.open()
        }
        $scope.showForgetForm = function(size) {
            $location.url(uiRouters.forgotpassword);
        }
        $scope.authenticationAction = function() {
            $location.url(uiRouters.newpassword);
        }
        $scope.authentitionAction = function() {
            $location.url(uiRouters.dashboard);

        }
        $scope.UseasGuest=function()
        {
            $location.url(uiRouters.useasguest);
        }


        $scope.open = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                size: size
            });
        };


        function resetDefaultValues() {
            vm.signFormData['useremail'] = "rererere";
            vm.signFormData['password'] = "rrrr";
        }
        resetDefaultValues();

    }

})();
