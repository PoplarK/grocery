var app = angular.module("VAPP", []);

app.controller("indexController", ["$scope", function($scope) {
}]);

app.directive('ensureUnique', function($http) {
    return {
        require: 'ngModel',
        link: function(scope, ele, attrs, ngModel) {
            scope.$watch(attrs.ngModel, function(n) {
                if (!n) return;
                // tmp validate
                if("username" === n) {
                    ngModel.$setValidity('unique', false);
                } else {
                    ngModel.$setValidity('unique', true);
                }
                /* server validate
                if (!n) return;
                $http({
                    method: 'POST',
                    url: '/api/check/' + attrs.ensureUnique,
                    data: {
                        field: attrs.ensureUnique,
                        value: scope.ngModel
                    }
                }).success(function(data) {
                    ngModel.$setValidity('unique', data.isUnique);
                }).error(function(data) {
                    ngModel.$setValidity('unique', false);
                });
                */
            });
        }
    };
});

app.directive("ageDirective", function() { // 使用$parsers数组是实现自定义验证的途径之一
    return { // 为何不再进行require的验证 ???
        require: "^ngModel", // ^ngModel ???
        link: function(scope, ele, attrs, ngModel) {
            ngModel.$parsers.unshift( // $parsers ???
                function(viewValue) {
                    if(!viewValue) return;
                    var i = parseInt(viewValue);
                    if (i >= 1 && i <= 100) {
                        ngModel.$setValidity('inAgeScope', true);
                        return viewValue;
                    } else {
                        ngModel.$setValidity('inAgeScope', false);
                        return undefined;
                    }
            });
        }
    }
});