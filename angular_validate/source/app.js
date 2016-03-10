var app = angular.module("VAPP", ["ngMaterial"]);

app.controller("indexController", ["$scope", function($scope) {
    $scope.changePage = function(param) {
        switch(param) {
            case "home":
                $scope.isHomePage = true;
                $scope.isNgFormPage = false;
                break;
            case "ngForm":
                $scope.isHomePage = false;
                $scope.isNgFormPage = true;
                break;
            default:
                $scope.isHomePage = true;
                $scope.isNgFormPage = false;
        }
        $scope.isSideNavOpen = false;
    };
}]);

app.controller("normalFormController", ["$scope", function($scope) {
    $scope.signupForm = function() {
        console.log($scope.signup_form);
    };
}]);

app.controller("ngFormController", ["$scope", function($scope) {
    function User() {
        this.name = "";
        this.email = "";
    }
    function Department() {
        this.name = "";
        this.UNum = 0;
    }
    Department.prototype.setUsers = function() {
        var p = parseInt(this.UNum);
        this.users = [];
        for(var i=0; i<p; i++) {
            var x = new User();
            this.users.push(x);
        }
    }
    $scope.company = {
        name:"",
        DNum: 0,
        setDepartments: function() {
            var p = this.DNum;
            if(p<=0) {delete this.departments;}
            this.departments = [];
            for(var i=0; i<p; i++) {
                var x = new Department();
                this.departments.push(x);
            }
        }
    }
    $scope.create = function() {
        console.log($scope.company);
    }
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