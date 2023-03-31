(function (){
    'use strict';
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){

        $scope.buttonVariable = function (){
           var message = "";
            if ($scope.textboxVariable === null || $scope.textboxVariable === "" || $scope.textboxVariable === undefined){
                message = "please input data first"
            }
            else{
                var x =  $scope.textboxVariable.split(',');
               if (x === "" ){
                   message = "please input data first";
                }
               else if (x.length <= 3){
               message = "you good."
            }
            else{
               message = "nope not good."
            }
        }
           $scope.message = message;
        }
    }

})();