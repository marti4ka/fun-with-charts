app.factory('timeline', function() {
    return {
        getOptions: function() {
          // Insert options here
          // refer to: https://developers.google.com/chart/interactive/docs/gallery/timeline
          var options = {
            height: 400,
            width: 500,
            timeline: { singleColor: '#8d8' }
          };
          return options;
        },
        getHappiness: function() {
        	return 0;
        }
    };
});
