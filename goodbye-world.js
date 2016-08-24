/**
 * Created by Bersling on 24/08/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GoodbyeWorld;
    return {
        setters:[],
        execute: function() {
            GoodbyeWorld = (function () {
                function GoodbyeWorld($scope) {
                    this.$scope = $scope;
                    $scope.name = "World 2";
                }
                GoodbyeWorld.$inject = ["$scope"];
                return GoodbyeWorld;
            }());
            exports_1("GoodbyeWorld", GoodbyeWorld);
        }
    }
});
