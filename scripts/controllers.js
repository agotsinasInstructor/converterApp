app.controller ('converterController', [
  '$scope',
  'Converter',
  function ($scope, Converter) {
    $scope.conv = new Converter ();
    $scope.c = 0;
    $scope.k = 0;

    // Initialize the variables for converter from meters to
    $scope.inputM = 0;
    $scope.outputM = 0;
    $scope.outputMM = 0;
    $scope.outputCM = 0;
    $scope.outputKM = 0;
    $scope.outputYD = 0;
    $scope.outputIN = 0;
    $scope.outputFT = 0;
    $scope.choices = [
      {value: 'mm', displayName: 'Χιλιοστά'},
      {value: 'cm', displayName: 'Εκατοστά'},
      {value: 'km', displayName: 'Χιλιόμετρα'},
      {value: 'yd', displayName: 'Γιάρδες'},
      {value: 'ft', displayName: 'Πόδια'},
      {value: 'inc', displayName: 'Ίντσες'},
    ];
  },
]);

app.controller ('calculationController', [
  '$scope',
  'Calculator',
  'Converter',
  function ($scope, Calculator, Converter) {
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
