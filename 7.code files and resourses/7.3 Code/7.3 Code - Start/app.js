var treeData =
	{
    "name": "Level 1",
    "children": [
    	{ 
        "name": "Level 2: A",
        "children": [
          { "name": "Level 3: A" },
          { "name": "Level 3: B" }]
      	},
      	{ "name": "Level 2: B" }]
    };


// Set the dimensions
var padding = 60,
    barchart_width = 800,
    barchart_height = 600;

var svg = d3.select("#barChart")
			.append("svg")
    		.attr("width", barchart_width + padding)
    		.attr("height", barchart_height + padding)
  			.append("g")
    		.attr('transform', 'translate(' + padding +',0)');

var i = 0,
    duration = 750,
    root;

// Declares a tree layout
var treemap = d3.tree().size([barchart_height, barchart_width]);

// Assigns parent, children, barchart_height, depth
root = d3.hierarchy(treeData, 
	function(d) { 
		return d.children; 
	});

root.x0 = barchart_height / 2;
root.y0 = 0;