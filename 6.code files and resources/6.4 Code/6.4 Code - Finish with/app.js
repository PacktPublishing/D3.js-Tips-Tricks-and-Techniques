var data = [
	{ date: 2000, number: 14 },
	{ date: 2001, number: 19 },
	{ date: 2002, number: 23 },
	{ date: 2003, number: 30 },
	{ date: 2004, number: -35 },
	{ date: 2005, number: 35 },
	{ date: 2006, number: 32 },
	{ date: 2007, number: 47 },
	{ date: 2008, number: 49 },
	{ date: 2009, number: 54 },
	{ date: 2010, number: 57 },
	{ date: 2011, number: 61 },
	{ date: 2012, number: 65 },
	{ date: 2013, number: -65 },
	{ date: 2014, number: 67 },
	{ date: 2015, number: -68 },
	{ date: 2016, number: 74 },
	{ date: 2017, number: 79 },
	{ date: 2018, number: 83 },
	{ date: 2019, number: -83 },
	{ date: 2020, number: 92 },
];


var barchart_width  = 800;
var barchart_height = 600;
var padding         = 40;

var time_parse  = d3.timeParse('%Y');  
var time_format = d3.timeFormat('%Y'); 


// Date format
data.forEach(function(e,i) {
	data[i].date = time_parse(e.date);
});


//Creates scales
var x_scale = d3.scaleTime()
				.domain([
					d3.min(data, function(d) {
						return d.date;
					}),
					d3.max(data, function(d) {
						return d.date;
					})
				])
				.range([padding, barchart_width - padding]);


var y_scale = d3.scaleLinear()
				.domain([
					0, d3.max(data, function(d) {
						return d.number;
					})
				])
				.range([barchart_height - padding, padding]);


// Creates the SVG
var svg =  d3.select('#barChart')
			.append('svg')  
			.attr('height', barchart_height)
			.attr('width', barchart_width);


// Creates axis
var x_axis = d3.axisBottom(x_scale)
			.ticks(5)
			.tickFormat(time_format);

var y_axis = d3.axisLeft(y_scale)
			   .ticks(8);


// Draws the axis
svg.append('g')
   .attr('transform', 'translate(0,'+ (barchart_height-padding) +')')
   .call(x_axis);
svg.append('g')
   .attr('class', 'y-axis')
   .attr('transform', 'translate(' + padding +',0)')
   .call(y_axis);


// Creates the line
var line = d3.line()
		.defined(function(d){ 
			return d.number >= 0;
		})
		.x(function(d){
			return x_scale(d.date);
		})
		.y(function(d){
			return y_scale(d.number);
		});

svg.append('path')
	.datum(data)
	.attr('fill', 'none')
	.attr('stroke', 'orange')
	.attr('stroke-width', 5)
	.attr('d', line);