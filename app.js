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
  
  //--------------- DEMO starting here ------------------------------------------

  $scope.bmi = {
    type: 'BarChart', // 
    options: {},
    data: {
      cols: [
        {label: "ID", type: "string"},
        {label: "weght", type: "number"}
      ],
      rows: [
        {c: [ {v: 'Sheldon'}, {v: 65} ]},
        {c: [ {v: 'Penny'}, {v: 50} ]},
        {c: [ {v: 'Howard'}, {v: 45} ]},
        {c: [ {v: 'Leonard'}, {v: 70} ]},
        {c: [ {v: 'Raj'}, {v: 68}, {v: 170} ]}
    ]}
  };

  $scope.bmi = {
    type: 'BarChart',
    options: {},
    data: {
      cols: [
        {label: "ID", type: "string"},
        {label: "weght", type: "number"},
        {label: "height", type: "number"}
      ],
      rows: [
        {c: [ {v: 'Sheldon'}, {v: 65}, {v: 188} ]},
        {c: [ {v: 'Penny'}, {v: 50}, {v: 160} ]},
        {c: [ {v: 'Howard'}, {v: 45}, {v: 157} ]},
        {c: [ {v: 'Leonard'}, {v: 70}, {v: 163} ]},
        {c: [ {v: 'Raj'}, {v: 68}, {v: 170} ]}
    ]}
  };

  $scope.bmi = {
    type: 'BubbleChart',
    options: $scope.charts['BMI'].getOptions(),
    data: {
      cols: [
        {label: "ID", type: "string"},
        {label: "weght", type: "number"},
        {label: "height", type: "number"},
        {label: "bmi", type: "number"}
      ],
      rows: [
        {c: [ {v: 'Sheldon'}, {v: 65}, {v: 188}, {v: 65/1.88/1.88} ]},
        {c: [ {v: 'Penny'}, {v: 50}, {v: 160}, {v: 50/1.6/1.6} ]},
        {c: [ {v: 'Howard'}, {v: 45}, {v: 157}, {v: 45/1.57/1.57} ]},
        {c: [ {v: 'Leonard'}, {v: 70}, {v: 163}, {v: 70/1.63/1.63} ]},
        {c: [ {v: 'Raj'}, {v: 68}, {v: 170}, {v: 68/1.7/1.7} ]}
    ]}
  };
  
  $scope.bmi = {
    type: 'BubbleChart',
    options: $scope.charts['BMI'].getOptions(),
    data: {
      cols: [
        {label: "ID", type: "string"},
        {label: "weght", type: "number"},
        {label: "height", type: "number"},
        {label: "bmi", type: "number"},
        {label: "Graduated school", type: "number"}
      ],
      rows: [
        {c: [ {v: 'Sheldon'}, {v: 65}, {v: 188}, {v: 65/1.88/1.88}, {v: 10} ]},
        {c: [ {v: 'Penny'}, {v: 50}, {v: 160}, {v: 50/1.6/1.6}, {v: 30} ]},
        {c: [ {v: 'Howard'}, {v: 45}, {v: 157}, {v: 45/1.57/1.57}, {v: 15} ]},
        {c: [ {v: 'Leonard'}, {v: 70}, {v: 163}, {v: 70/1.63/1.63}, {v: 13} ]},
        {c: [ {v: 'Raj'}, {v: 68}, {v: 170}, {v: 68/1.7/1.7}, {v: 15} ]}
    ]}
  };

  // this is the code for the gauge chart
  $scope.gauge = {
    type: 'Gauge',
    options: $scope.charts['gauge'].getOptions(),
    data: {
      cols: [
        { label: 'Label', type: 'string' },
        { label: 'value', type: 'number' }
      ],
      rows: [
        {c: [ {v: 'Pressure'}, {v:  80 }]}
      ]
    }
  };

  // this is the code for the population chart
  $scope.population = {
    type: 'PieChart',
    options: $scope.charts['population'].getOptions(),
    data: {
      cols: [
        { label: 'Continent', type: 'string' },
        { label: 'Population', type: 'number' }
      ],
      rows: [
        {c: [ {v: 'Asia'}, {v:  4436224000 }]},
        {c: [ {v: 'Africa'}, {v:  1216130000 }]},
        {c: [ {v: 'Europe'}, {v:  738849000 }]},
        {c: [ {v: 'North America'}, {v:  579024000 }]},
        {c: [ {v: 'South America'}, {v:  422535000 }]},
        {c: [ {v: 'Oceania'}, {v:  39901000 }]},
        {c: [ {v: 'Antarctica'}, {v:  1106 }]}
      ]
    }
  };

  // this is the code for the timeline
  $scope.timeline = {
    type: 'Timeline',
    options: $scope.charts['timeline'].getOptions(),
    data: {
      cols: [
        { label: 'Name', type: 'string' },
        { label: 'Start', type: 'date' },
        { label: 'End', type: 'date' }
      ],
      rows: [
        {c: [ {v: '1'}, {v:  new Date(1914, 7, 28) }, {v:  new Date(1918, 11, 11) }]},
        {c: [ {v: '2'}, {v:  new Date(1939, 9, 1) }, {v:  new Date(1945, 9, 2) }]},
        {c: [ {v: '3'}, {v:  new Date(1947, 1, 1) }, {v:  new Date(1991, 12, 1) }]},
      ]
    }
  };

  // this is the code for the line chart
  $scope.weather = {
    type: 'LineChart',
    options: $scope.charts['weather'].getOptions(),
    data: {
      cols: [
        { label: 'Month', type: 'number' },
        { label: 'Min Temperature', type: 'number' },
        { label: 'Max Temperature', type: 'number' }
      ],
      rows: [
        {c: [ {v: '1'}, {v:  4.6 }, {v:  19.6 }]},
        {c: [ {v: '2'}, {v:  5.4 }, {v:  22.5 }]},
        {c: [ {v: '3'}, {v:  6.4 }, {v:  24.3 }]},
        {c: [ {v: '4'}, {v:  7.3 }, {v:  27.9 }]},
        {c: [ {v: '5'}, {v:  8.7 }, {v:  28.2 }]},
        {c: [ {v: '6'}, {v:  10.1 }, {v:  30 }]},
        {c: [ {v: '7'}, {v:  10.8 }, {v:  28.4 }]},
        {c: [ {v: '8'}, {v:  11.4 }, {v:  29.7 }]},
        {c: [ {v: '9'}, {v:  11.1 }, {v:  32 }]},
        {c: [ {v: '10'}, {v:  9.8 }, {v:  31.2 }]},
        {c: [ {v: '11'}, {v:  6.8 }, {v:  24.5 }]},
        {c: [ {v: '12'}, {v:  4.5 }, {v:  19.1 }]},
      ]
    }
  };

});
