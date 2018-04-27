app.factory('population', function() {
    return {
        getOptions: function() {
          // Insert options here
          // refer to: https://developers.google.com/chart/interactive/docs/gallery/piechart#donut
          var options = {
            width: 700, height: 700,
            pieHole: 0.5,
            pieSliceTextStyle: {
              color: 'black',
            },
          };
          return options;
        },
        getHappiness: function() {
        	return 0;
        }
    };
});
