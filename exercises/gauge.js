app.factory('gauge', function() {
    return {
        getOptions: function() {
          // Insert options here
          // refer to: https://developers.google.com/chart/interactive/docs/gallery/gauge
            var options = {
              width: 400, height: 400,
              redFrom: 90, redTo: 100,
              yellowFrom:75, yellowTo: 90,
              minorTicks: 5
            };
            return options;
        },
        getHappinessPercent: function() {
        	return 0;
        }
    };
});
