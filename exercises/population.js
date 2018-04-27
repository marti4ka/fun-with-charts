app.factory('population', function() {
    return {
        getOptions: function() {
          var options = {
            // Insert options here
            // refer to: https://developers.google.com/chart/interactive/docs/gallery/piechart#donut
          };
          return options;
        },
        getHappiness: function() {
        	return 0;
        }
    };
});
