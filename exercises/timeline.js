app.factory('timeline', function() {
    return {
        getOptions: function() {
          var options = {
            // Insert options here
            // refer to: https://developers.google.com/chart/interactive/docs/gallery/timeline
          };
          return options;
        },
        getHappiness: function() {
        	return 0;
        }
    };
});
