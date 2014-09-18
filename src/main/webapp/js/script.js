var app=angular.module("myApp",[]);
  
app.controller('SeguroController', function($scope) {
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
}