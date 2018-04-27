app.factory('gauge', function() {
    return {
        getOptions: function() {
            var options = {
              // Insert options here
              // refer to: https://developers.google.com/chart/interactive/docs/gallery/gauge
            };
            return options;
        },
        getHappinessPercent: function() {
        	return 0;
        }
    };
});
