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


// Creates axis
var x_axis = d3.axisBottom(x_scale);
svg.append('g')
   .attr('class', 'x-axis')
   .attr('transform', 'translate(0,'+ (barchart_height-20) +')')
   .call(x_axis);


// Creates circles
svg.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', function(d){
			return x_scale(d[0]);
		})
		.attr('cy', function(d){
			return y_scale(d[1]);
		})
		.attr('r', function(d){
			return d[1] / 10;
		})
		.attr('fill', 'orange');