var app = angular.module("uzduotis", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	.when("/produktai", {
		template: '<table id="produktuTable" class="display" width="100%"></table>',
		controller : 'produktaiController'
	})
	.when("/uzsakymai", {
		template : '<table id="uzsakymuTable" class="display" width="100%"></table>',
		controller : 'uzsakymaiController'
	})
	;
});

app.controller("produktaiController", function() {
	createProductaiDataTable();
});

app.controller("uzsakymaiController", function() {
	createUzsakymaiDataTable();
});

