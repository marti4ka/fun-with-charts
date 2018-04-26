var app = angular.module('FunWithCharts',['googlechart', 'ui.bootstrap']);

app.controller('MainController', function($scope, $injector) {
  //load all files
  $scope.files = ['BMI', 'gauge', 'population', 'timeline', 'weather'];
  $scope.charts = [];

  $scope.files.forEach(function(file) {
    try{
      $scope.charts[file] = $injector.get(file);
    }
    catch(e){
      console.log("cannot load file " + file);
    }
  });

  // add tabs logic
  $scope.radioModel = 'Table';
  $scope.checkResults = [];
  $scope.checkModel = {
    table: true,
    graphs: false
  };

  $scope.$watchCollection('checkModel', function () {
    $scope.checkResults = [];
    angular.forEach($scope.checkModel, function (value, key) {
      if (value) {
        $scope.checkResults.push(key);
      }
    });
  });

  // BMI Chart
  // $scope.bmi = {
  //   type: $scope.charts['BMI'].getType(),
  //   options: $scope.charts['BMI'].getOptions(),
  //   data: $scope.charts['BMI'].getData()
  // };

  $scope.bmi = {
    type: 'BarChart',
    options: {
      title: 'Weight distribution',
      height: 400,
      width: 1000,
      hAxis: { title: 'BMI Range'},
      vAxis: { title: 'count'}
    },
    data: {
      cols: [
        {label: "BMI Range", type: "string"},
        {label: "Count", type: "number"}
      ],
      rows: [
        {c: [ {v: "<20"}, {v: 12} ]},
        {c: [ {v: "20-22"}, {v: 11} ]},
        {c: [ {v: "22-24"}, {v: 15} ]},
        {c: [ {v: "24+"}, {v: 9} ]}
    ]}
  };

  $scope.gauge = {
    type: 'Gauge',
    options: {
      title: 'asdasdasd',
      width: 400, height: 400,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    },
    data: {
      cols: [
        { label: 'Label', type: 'string' },
        { label: 'value', type: 'number' }
      ],
      rows: [
        {c: [ {v: 'asd'}, {v:  80 }]}
      ]
    }
  };

});
