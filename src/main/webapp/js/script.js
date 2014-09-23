var app=angular.module("myApp",[]);

//['$scope', '$log',function($scope, $log)....] needed because minimize will change to function(a, b) and Angular need to know the name of the service
app.controller('SeguroController', ['$scope', '$log', function($scope, $log) {
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
}]);