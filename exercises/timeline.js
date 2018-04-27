app.factory('timeline', function() {
    return {
        getOptions: function() {
          var options = {
            height: 400;
            width: 400;  
            timeline: { singleColor: '#8d8' }
          };
          return options;
        },
        getHappiness: function() {
        	return 0;
        }
    };
});
