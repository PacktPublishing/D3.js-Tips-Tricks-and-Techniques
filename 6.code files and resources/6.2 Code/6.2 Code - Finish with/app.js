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
var x_axis = d3.axisBottom(x_scale).ticks(9);
svg.append('g')
   .attr('class', 'x-axis')
   .attr('transform', 'translate(0,'+ (barchart_height-20) +')')
   .call(x_axis);

// The y-axis
var y_axis = d3.axisRight(y_scale)
			   .ticks(5)
			   .tickFormat(function (d) {
			   		return d + '%';
			   });
svg.append('g')
   .attr('class', 'y-axis')
   .attr('transform', 'translate(' + 60 +', 0)')
   .call(y_axis);


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

// Create labels
svg.append('g').selectAll('text')
	.data(data)
	.enter() 
	.append('text')
	.text(function(d){
		return d.join(',');
	})
	.attr('x', function(d){
		return x_scale(d[0]);
	})
	.attr('y', function(d){
		return y_scale(d[1]);
	});