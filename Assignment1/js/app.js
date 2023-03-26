(function () {
    "use strict";
    angular.module("Assignment", [])
        .controller("Controller", Controller);
    Controller.$inject = ["$scope", "$filter"];
    function Controller($scope) {
        $scope.name = "";
        $scope.msg = "";
        $scope.check = function () {
              $scope.msg=setMessage($scope.name);
        };
        function setMessage(name) {
            if(name.length==0){
                return "Please provide data"
                $scope.msg
            }
           else {
            var arr=name.split(",");
            if(arr.length>3){
                return "Too much!"
            }
            else{
                return "Enjoy!"
            }

           }
        }
    }
})()