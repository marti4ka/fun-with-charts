app.factory('BMI', function() {
    return {
      getType: function() {
        return 'BubbleChart';
      },
      getOptions: function() {
        var options = {
          title: 'BMI Calculator'
        };
        return options;
      },
      getData: function() {
        var data = {
          cols: [
            {id: 'id', label: '??', type: 'string'},
            {id: 'kg', label: 'Weight in kg', type: 'number'},
            {id: 'cm', label: 'Height in cm', type: 'number'},
            {id: 'bmi', label: 'BMI', type: 'number'}
        ],
        rows: [
         ['id', 'kg', 'cm', 'bmi'],
         ['', 80.66, 1.67, 33739900],
         ['', 19.84, 1.36, 81902307],
         ['', 78.6, 1.84, 5523095],
         ['', 72.73, 2.78, 79716203],
         ['', 80.05, 2, 61801570],
         ['', 72.49, 1.7, 73137148],
         ['', 68.09, 4.77, 31090763]
       ]};
        return data;
      },
      getHappiness: function() {
      	return 0;
      }
    };
});
