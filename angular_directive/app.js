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

    $scope.showInput = function(input) {
        alert("你输入的是："+input);
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

// boolean scope
app.directive("scopeFalse", function() {
    return {
        restrict: "A",
        scope: false, // 默认就是false，指令中的作用域对象与父作用域对象为同一个
        template: "<div><input type='text' ng-model='testScopeFalse'/></div>",
        link: function(scope, elem, attrs) {
            console.log("scope false: ", scope);
        }
    }
});

app.directive("scopeTrue", function() {
    return {
        restrict: "A",
        scope: true, // 指令从父作用域继承并创建一个新的作用域对象，与controller有类似。
        template: "<div><input type='text' ng-model='testScopeTrue'/></div>",
        link: function(scope, elem, attrs) {
            console.log("scope true: ", scope);
        }
    }
});

// object scope
app.directive("scopeObject", function() {
    return {
        restrict: "A",
        scope: { }, // 指令直接创建一个新的作用域对象
        template: "<div><input type='text' ng-model='testScopeObject'/></div>",
        link: function(scope, elem, attrs) {
            console.log("scope object: ", scope);
        }
    };
});

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

app.directive("bindStrategyAnd", function() {
    return {
        restrict: "A",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="text"><md-button ng-click="done({input: text})">输入完毕</md-button>'
    };
});
/*
    注：
        1.  绑定的是函数
        2.  指令中的函数参数为object
        3.  在外面绑定函数时传参，为object的key
        4.  controller中对应函数的参数则为object的value
*/

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
app.controller('selectController', function($scope) {
    $scope.items = ["AAA", "BBB", "CCC", "DDD", "EEE"];

    $scope.users = [
        {id: 111, name: "AAA"},
        {id: 222, name: "BBB"},
        {id: 333, name: "CCC"},
        {id: 444, name: "DDD"},
        {id: 555, name: "EEE"},
    ];
});

app.controller("includeController", function($scope) {
    $scope.$watch("selected", function(newVal, oldVal) {
        console.log(newVal, oldVal);
    });
});
