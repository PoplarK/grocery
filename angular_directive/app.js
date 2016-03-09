var app = angular.module("DAPP", ["ngMaterial"]);

app.controller("indexController", ["$scope", function($scope) {
    $scope.changePage = function(page) {
        switch(page) {
            case "self-defined":
                $scope.page = "self-defined";
                break;
            case "ng-select":
                $scope.page = "ng-select";
                break;
            case "ng-include":
                $scope.page = "ng-include";
                break;
            default:
                $scope.page = "self-defined";
        }
        $scope.isSideNavOpen = false;
    }
}]);

// restrict
app.directive("restrictE", function() {
    return {
        restrict: "E",
        template: "<span>Restrict-E</span>"
    };
});

app.directive("restrictA", function() {
    return {
        restrict: "A",
        template: "<span>Restrict-A</span>"
    };
});

app.directive("restrictC", function() {
    return {
        restrict: "C",
        template: "<span>Restrict-C</span>"
    };
});

app.directive("restrictM", function() {
    return {
        restrict: "M",
        template: "<span>Restrict-M</span>"
    };
});

// replace
app.directive("replaceE", function() {
    return {
        restrict: "E",
        template: "<span>Replace-E</span>",
        replace: true
    };
});

app.directive("replaceA", function() {
    return {
        restrict: "A",
        template: "<span>Replace-A</span>",
        replace: true
    };
});

app.directive("replaceC", function() {
    return {
        restrict: "C",
        template: "<span>Replace-C</span>",
        replace: true
    };
});

app.directive("replaceM", function() {
    return {
        restrict: "M",
        template: "<span>Replace-M</span>",
        replace: true
    };
});

// bind strategy
app.directive("bindStrategyAt", function() {
    return {
        restrict: "A",
        scope: {
            url: "@",
            text: "@linkText"
        },
        template: 'inner anchor <a href="{{ url }}" target="_blank">{{ text }}</a><br/>inner input <input type="text" ng-model="text">'
    };
});

app.directive("bindStrategyEqual", function() {
    return {
        restrict: "A",
        scope: {
            url: "@",
            text: "=linkText"
        },
        template: 'inner anchor <a href="{{ url }}" target="_blank">{{ text }}</a><br/>inner input <input type="text" ng-model="text">'
    };
});

/*
app.directive("bindStrategyAt", function() {
    return {
        restrict: "A",
        replace: true,
        scope: {  // 作用
            url: "@myUrl",
            text: "@myLinkText"
        },
        template: '<a href="{{ url }}">{{ text }}</a>',
        link: function(scope, ele, attrs) {
            console.log(scope, ele, attrs);
        }
    };
});
*/

// ng-select
app.controller('selectController',function($scope) {
    $scope.items = ["AAA", "BBB", "CCC", "DDD", "EEE"];

    $scope.users = [
        {id: 111, name: "AAA"},
        {id: 222, name: "BBB"},
        {id: 333, name: "CCC"},
        {id: 444, name: "DDD"},
        {id: 555, name: "EEE"},
    ];
});
