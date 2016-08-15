angular
	.module('webApp', ["ngMaterial"])
	.config(function($mdThemingProvider){

		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');
	})
	  .directive("helloWorld", function(){
	  	return {
	  		template : "<h1> helloWorld </h1>"
	  	}
	  });