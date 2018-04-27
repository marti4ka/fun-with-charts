app.factory('timeline', function() {
    return {
        getOptions: function() {
          // Insert options here
          // refer to: https://developers.google.com/chart/interactive/docs/gallery/timeline
          var options = {
            width: 600, height: 400
          };
          return options;
        },
        getHappiness: function() {
        	return 0;
        }
    };
});
