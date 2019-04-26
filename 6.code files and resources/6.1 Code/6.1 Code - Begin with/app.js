var data = [
	[200, 50],
	[230, 290],
	[20, 300],
	[10, 150],
	[400, 200],
	[90, 340],
	[150, 220],
	[380, 130]
];


var barchart_width = 800;
var barchart_height = 400;

// Creates the SVG
var svg =  d3.select('#barChart')
			.append('svg')  
			.attr('height', barchart_height)
			.attr('width', barchart_width);

// Creates scales
var x_scale = d3.scaleLinear()
				.domain([0, d3.max(data, function(d){
					return d[0];
				})])
				.range([0, barchart_width]);
var y_scale = d3.scaleLinear()
				.domain([0, d3.max(data, function(d){
					return d[1];
				})])
				.range([0, barchart_height]);
