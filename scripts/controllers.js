app.controller ('converterController', [
  '$scope',
  'Converter',
  function ($scope, Conveter) {
    $scope.conv = new Conveter ();
    $scope.c = 0;
    $scope.k = 0;
  },
]);

app.controller ('calculationController', [
  '$scope',
  'Calculator',
  'Converter',
  function ($scope, Calculator, Conveter) {
    $scope.calc = new Calculator ();
    $scope.conv = new Converter ();

    $scope.OhmsR = 1;
    $scope.OhmsV = 1;
    $scope.OhmsI = 1;
  },
]);

app.config (function ($routeProvider) {
  $routeProvider
    .when ('/', {
      templateUrl: 'templates/main.html',
    })
    .when ('/templates/temperature', {
      templateUrl: 'templates/temperature.html',
      controller: 'converterController',
    })
    .when ('/templates/area', {
      templateUrl: 'templates/area.html',
      controller: 'calculationController',
    })
    .when ('/templates/ohmslaw', {
      templateUrl: 'templates/ohmslaw.html',
      controller: 'calculationController',
    })
    .when ('/templates/toMeters', {
      templateUrl: 'templates/toMeters.html',
      controller: 'converterController',
    })
    .when ('/templates/fromMeters', {
      templateUrl: 'templates/fromMeterTo.html',
      controller: 'converterController',
    });
});
