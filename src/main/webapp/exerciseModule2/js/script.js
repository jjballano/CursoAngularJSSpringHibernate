
var app = angular.module("exercise2",[]);

app.controller("ExerciseController",function($scope) {
});

app.controller("DetailController",function($scope) {
    $scope.mortgage = {};
    $scope.changeEuribor = function(){
        if ($scope.mortgage.euriborType === 'euribor'){
            $scope.mortgage['euribor'] = '0.8';
        } else {
            $scope.mortgage['euribor'] = '0.4';
        }
    }
    $scope.calculateMortgage = function(){
        $scope.mortgage.rate = 0;
        if ($scope.mortgage.interestType === 'fixed'){
            $scope.mortgage.rate = $scope.mortgage.fixInterest;
        } else if ($scope.mortgage.interestType === 'variable'){
            $scope.mortgage.rate = $scope.mortgage.differential + $scope.mortgage.euribor;
        }
        if ($scope.mortgage.houseInsurance){
            $scope.mortgage.rate -= 0.5;
        }
        if ($scope.mortgage.salaryInsurance){
            $scope.mortgage.rate -= 0.5;
        }
        if ($scope.mortgage.lifeInsurance){
            $scope.mortgage.rate -= 0.5;
        }
        $scope.mortgage.fee = ($scope.mortgage.capital * $scope.mortgage.rate / 12)/(100*(1-Math.pow((1+($scope.mortgage.rate/12)/100), -$scope.mortgage.installments*12)));
    }
});