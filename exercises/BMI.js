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
        return {};
      },
      getHappiness: function() {
      	return 0;
      }
    };
});
