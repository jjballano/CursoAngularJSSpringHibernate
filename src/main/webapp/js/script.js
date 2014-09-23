var app=angular.module("myApp",[]);

//['$scope', '$log',function($scope, $log)....] needed because minimize will change to function(a, b) and Angular need to know the name of the service
app.controller('SeguroController', ['$scope', '$log', '$http', function($scope, $log, $http) {
	$scope.seguro={
	    nif:"",
	    nombre:"",
	    ape1:"",
	    edad:undefined,
	    sexo:"",
	    casado:false,
	    numHijos:undefined,
	    embarazada:false,
	    fechaCreacion:new Date(),
	    coberturas: {
	      oftalmologia:false,
	      dental:false,
	      fecundacionInVitro:false
	    },
	    enfermedades:{
	      corazon:false,
	      estomacal:false,
	      rinyones:false,
	      alergia:false,
	      nombreAlergia:""
	    }
	}
    $log.debug("Acabamos de crear el $scope");
    var initData = $http({
        method: 'GET',
        url: './data.json'
    }).success(function(data, status, headers, config){
        $scope.seguro = data;
    }).error(function(data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:"+status);
    });
}]);