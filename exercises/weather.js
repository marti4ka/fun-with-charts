app.factory('weather', function() {
    return {
        getOptions: function() {
            // Insert options here
            // refer to: https://developers.google.com/chart/interactive/docs/gallery/linechart
            var options = {
              title: 'Wather in San Francisco',
              width: 1000, height: 400,
              curveType: 'function',
              legend: { position: 'right' }
            };
            return options;
        },
        getHappiness: function() {
        	return 0;
        }
    };
});
