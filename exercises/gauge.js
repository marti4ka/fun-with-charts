app.factory('gauge', function() {
    return {
        getOptions: function() {
            var options = {
              // Insert options here
              // refer to: https://developers.google.com/chart/interactive/docs/gallery/gauge
              redFrom: 0, redTo: 20,
              yellowFrom:20, yellowTo: 50,
              minorTicks: 5,
              width: 400, height: 400
            };
            return options;
        },
        getHappiness: function() {
        	return 0;
        }
    };
});
