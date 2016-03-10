$(document).ready(function(){
	drawRectangleChart();
	drawPieChart();		  
	drawLineChart();
});

function drawRectangleChart(){
	var data = [30,20,10,40,50,10,20];
	var svg_width = 500;
	var svg_height = 200;
	var bar_padding = 5;
	
	var svg = d3.select('#chart1').append("svg")
	          .attr("width", svg_width)
	          .attr("height", svg_height);
	
	svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
            return i * (svg_width / data.length);
         })
    .attr("y", function(d) {
        return svg_height - (d * 4);
    })
    .attr("width", svg_width / data.length - bar_padding)
	.attr("height", function(d) {
	    return d * 4;
	})
	.attr("fill", function(d) {
		  return "rgb(0,0 ,"+d*5+" )";
	});
	
	svg.selectAll("text")
	   .data(data)
	   .enter()
	   .append("text")
	   .text(function(d) {
		   return d;
	   })
	   .attr("text-anchor", "middle")
	   .attr("x", function(d, i) {
            return i * (svg_width / data.length)+(svg_width / data.length - bar_padding)/2;
       })
       .attr("y", function(d) {
        	return svg_height - (d * 4)+ 20;
       })
       .attr("font-family", "sans-serif")
       .attr("font-size", "14px")
       .attr("fill", "white");
}

function drawPieChart(){
	var data = [30,20,10,40,50,10,20];
	var svg_width = 500;
	var svg_height = 200;
	var radius = Math.min(svg_width, svg_height) / 2;
	
	var svg = d3.select('#chart2').append("svg")
    .attr("width", svg_width)
    .attr("height", svg_height);
	
	var pie = d3.layout.pie();
	var colors = d3.scale.category10(); 
	
	var arc = d3.svg.arc() 
	.innerRadius(radius - 70)
	.outerRadius(radius - 20); 
	
	var arcOver = d3.svg.arc()
	.innerRadius(radius - 70)
    .outerRadius(radius - 10);
    
	
	var arcs = svg.selectAll("g.arc")
	.data(pie(data))
	.enter() 
	.append("g")
	.attr("class", "arc") 
	.attr("transform", "translate(" + svg_width / 2 + ", " + svg_height / 2 + ")");
	
	arcs.append("path") 
	.attr("fill", function(d, i) { 
		return colors(i); 
	})
	.attr("d", arc);
	
	arcs.append("text") 
	.attr("transform", function(d) {
		return "translate(" + arc.centroid(d) + ")";
	})
	.attr("text-anchor", "middle")
	.text(function(d) { 
		return d.value; 
	});
	
	arcs.on({
	    "mouseover": function(d, i){
	      d3.select(this.childNodes[0]).transition().duration(250).attr('d', arcOver);
	    },
	    "mouseout": function(d, i){
	      d3.select(this.childNodes[0]).transition().duration(250).attr('d', arc);
	    }
	}); 
}

function drawLineChart(){
	var data = [{x:10,y:20},{x:20,y:200}, {x:30,y:300}, {x:40,y:70}, {x:50,y:500}];
	var svg_width = 500;
	var svg_height = 200;
	var margin = {top: 10, right: 20, bottom: 30, left: 40};
	var svg = d3.select('#chart3').append("svg")
    .attr("width", svg_width + margin.left + margin.right)
    .attr("height", svg_height + margin.top + margin.bottom)
	.append('g')
	.attr('transform', 'translate('+margin.left+','+margin.top+')');
	
	var x = d3.scale.linear()
	  .domain([0, d3.max(data, function(d) { return d.x;})])
	  .range([0, svg_width]);
	
	var y = d3.scale.linear()
	  .domain([0, d3.max(data, function(d) { return d.y;})])
	  .range([svg_height, 0]);
	
	var xAxis = d3.svg.axis()
	  .scale(x)
	  .orient('bottom')
	  .ticks(5);

	var yAxis = d3.svg.axis()
	  .scale(y)
	  .orient('left')
	  .ticks(10);
	
	svg.append('g')
	  .attr('class', 'x axis')
	  .attr('transform', 'translate(0,' + svg_height + ')')
	  .call(xAxis)
	  .append('text')
	  .text('x')
	  .attr('transform', 'translate(' + svg_width + ', 0)');

	svg.append('g')
	  .attr('class', 'y axis')
	  .call(yAxis)
	  .append('text')
	  .text('y');
	
	var line = d3.svg.line()
	  .x(function(d) { return x(d.x); })
	  .y(function(d) { return y(d.y); });
	
	var path = svg.append('path')
	  .attr('class', 'line')
	  .attr('d', line(data))
	  .attr({
		  'fill':'none',
		  'stroke':'DodgerBlue'
	  });
	
	svg.selectAll('circle')
	  .data(data)
	  .enter()
	  .append('g')
	  .append('circle')
	  .attr('class', 'linecircle')
	  .attr('cx', line.x())
	  .attr('cy', line.y())
	  .attr('r', 3.5)
	  .on('mouseover', function() {
	    d3.select(this).transition().duration(500).attr('r', 5);
	  })
	  .on('mouseout', function() {
	    d3.select(this).transition().duration(500).attr('r', 3.5);
	  });
	
	//tip
	var tips = svg.append('g').attr('class', 'tips');
    var tip_width = 100;
    var tip_height = 50;
	tips.append('rect')
	  .attr('class', 'tips-border')
	  .attr('width', tip_width)
	  .attr('height', tip_height)
	  .attr('rx', 10)
	  .attr('ry', 10);

	var xWord = tips.append('text')
	  .attr('class', 'tips-text')
	  .attr('x', 10)
	  .attr('y', 20)
	  .text('');

	var yWord = tips.append('text')
	  .attr('class', 'tips-text')
	  .attr('x', 10)
	  .attr('y', 40)
	  .text('');
	
	svg.on('mousemove', function(){
		var mPos = d3.mouse(this);
		var cx = mPos[0] - margin.left;
		var x0 = x.invert(cx);
		var i = (d3.bisector(function(d) {
		      return d.x;
		    }).left)(data, x0, 1);
	    var d0 = data[i - 1];
	    var d1 = data[i] || {};
	    var d = x0 - d0.x > d1.x - x0 ? d1 : d0;
	    xWord.text('x: '+d.x);
	    yWord.text('y: '+d.y);
	    
	    var x1 = x(d.x);
	    var y1 = y(d.y);

	    var dx = x1 > svg_width ? x1 - svg_width + tip_width : x1 + tip_width > svg_width ? tip_width : 0;

	    var dy = y1 > svg_height ? y1 - svg_height + tip_height : y1 + tip_height > svg_height ? tip_height : 0;

	    x1 -= dx;
	    y1 -= dy;

	    d3.select('.tips')
	      .attr('transform', 'translate(' + x1 + ',' + y1 + ')');

	    d3.select('.tips').style('display', 'block');
	})
	.on('mouseout', function(){
		d3.select('.tips').style('display', 'none');
	});	
}