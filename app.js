var mytaskApp = angular.module('myapptest', ['ngRoute', 'ngSanitize', 'ngMessages', 'ngAnimate', 'pascalprecht.translate', 'ui.bootstrap']);

(function() {
    'use strict';
    mytaskApp.config(['$routeProvider', 'uiRouters', '$translateProvider', myConfigFun]);

    function myConfigFun($routeProvider, uiRouters, $translateProvider) {


        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.translations('en', translations[0]);
        $translateProvider.preferredLanguage('en');


        $routeProvider.
        when(uiRouters.login, {
            templateUrl: uiRouters.directivesHtmlPath + '/login.html',
            controller: 'loginCtrl'
        }).

        when(uiRouters.dashboard, {
            templateUrl: uiRouters.directivesHtmlPath + '/dashboard.html'
                //controller: 'dashboardCtrl'
        }).
        when('/menu', {
            template: '<div>menu</div>'
                //controller: 'dashboardCtrl'
        }).
        when(uiRouters.createuseraccount, {
            templateUrl: uiRouters.directivesHtmlPath + '/createuseraccount.html'
        }).
        when(uiRouters.forgotpassword, {
            templateUrl: uiRouters.directivesHtmlPath + '/forgotpassword.html',
            controller: 'loginCtrl'
        }).
        when(uiRouters.newpassword, {
            templateUrl: uiRouters.directivesHtmlPath + '/newpassword.html'
        }).
        when(uiRouters.useasguest, {
            templateUrl: uiRouters.directivesHtmlPath + '/useasguest.html'
        }).
        otherwise({
            redirectTo: uiRouters.login
        });
    }
    mytaskApp.run(['$rootScope', '$log', myRunFn]);

    function myRunFn($rootScope, $log) {
        $log.debug('app started.');
        $rootScope.username = "ravindra"
    }
})();
