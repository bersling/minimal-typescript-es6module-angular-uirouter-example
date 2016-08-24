/**
 * Created by Bersling on 24/08/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HelloWorld;
    return {
        setters:[],
        execute: function() {
            HelloWorld = (function () {
                function HelloWorld($scope) {
                    this.$scope = $scope;
                    $scope.name = "World";
                }
                HelloWorld.$inject = ["$scope"];
                return HelloWorld;
            }());
            exports_1("HelloWorld", HelloWorld);
        }
    }
});
