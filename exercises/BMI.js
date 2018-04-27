app.factory('BMI', function() {
    return {
      getOptions: function() {
        var options = {
          title: 'BMI',
          height: 400,
          width: 1000,
          // hAxis: { title: 'Weight'},
          // vAxis: { title: 'Height'},
          // colorAxis: {colors: ['green', 'red']}
        };
        return options;
      },
      getHappiness: function() {
      	return 0;
      }
    };
});
