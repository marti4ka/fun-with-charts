app.factory('BMI', function() {
    return {
      getOptions: function() {
        var options = {
          height: 400, width: 900,
          colorAxis: {colors: ['green', 'red']}
        };
        return options;
      },
      getHappiness: function() {
      	return 70;
      }
    };
});
