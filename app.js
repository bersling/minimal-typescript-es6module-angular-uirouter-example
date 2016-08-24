System.register(["./hello-world", "./goodbye-world"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hello_world_1, goodbye_world_1;
    var myApp;
    return {
        setters:[
            function (hello_world_1_1) {
                hello_world_1 = hello_world_1_1;
            },
            function (goodbye_world_1_1) {
                goodbye_world_1 = goodbye_world_1_1;
            }],
        execute: function() {
            myApp = angular.module('myApp', ['ui.router']);
            myApp.config(function ($stateProvider, $urlRouterProvider) {
                //
                // For any unmatched url, redirect to /state1
                $urlRouterProvider.otherwise("/state1");
                //
                // Now set up the states
                $stateProvider
                    .state('state1', {
                    url: "/state1",
                    templateUrl: "partials/state1.html",
                    controller: hello_world_1.HelloWorld
                })
                    .state('state2', {
                    url: "/state2",
                    templateUrl: "partials/state2.html",
                    controller: goodbye_world_1.GoodbyeWorld
                });
            });
        }
    }
});
