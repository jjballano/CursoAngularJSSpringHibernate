var app=angular.module("myApp",[]);

//Value services (app.value(....)) are used in the same way as app.constant but they cannot be injected in config and providers
app.constant("titles","Seguro Médico");
app.constant("maths", {
    //This is an example of constant, not used in the application
   add:function(a, b){
       return a + b;
   },
   substract: function(a, b){
       return a - b;
   }
    //Use after injection: maths.add(1,2)
});
app.constant("area",function(radio) {
    //This is an example of constant, not used in the application
    return 3.1416*radio*radio;
    //Use after injection: area(3)
})

//['$scope', '$log',function($scope, $log)....] needed because minimize will change to function(a, b) and Angular need to know the name of the service
app.controller('SeguroController', ['$scope', '$log', '$http', 'titles', function($scope, $log, $http, titles) {
    $scope.title = titles;
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

function Rectangulo(inicial) {
    this.ancho = inicial.ancho;
    this.alto = inicial.alto;

    this.setAncho = function(ancho){
        this.ancho = ancho;
    }

    this.setAlto=function(alto) {
        this.alto=alto;
    }

    this.getArea=function(){
        return this.alto*this.ancho;
    }
}

app.value("tamanyoInicialCuadrado",{
    ancho:2,
    alto: 2
});

app.service("cuadrado",['tamanyoInicialCuadrado',Rectangulo]);