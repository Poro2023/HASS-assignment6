maketitle()

function maketitle() {
	// 设置 SVG 元素的大小和边距
	var mapWidth = 1800;
	var mapHeight = 900;
	var margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20
	};
	var width = mapWidth - margin.left - margin.right;
	var height = mapHeight - margin.top - margin.bottom;

	// 创建 SVG 元素
	var mapsvg = d3.select("#title")
		.append("svg")
		.attr("id", "titlesvg")
		.attr("width", mapWidth)
		.attr("height", mapHeight);
	var mapg = mapsvg.append("g")
		.attr("transform", `translate(${mapWidth/11},0)`)
		
		
	const text = mapg.append('text')
		.attr("transform", `translate(${mapWidth/11},${50})`)
		.style('font-family', 'Arial')
		// .style('font-size', '20px')
		.style('text-anchor', 'start')
		.style('dominant-baseline', 'hanging')

	text.append("tspan")
		.text("The data Visualization")
		.style('font-weight', "bold")
		.attr('x', text.attr('x'))
		.attr('dy', '1.2em')
		.style("font-family", "Arial")
		.style("font-size", "40px")
		.append('tspan')
		.text(" of Predicting Chinese citizen’s intention")
		.style('font-weight', "normal")

	mapg.append('text')
		.attr("transform", `translate(${mapWidth/4},${200})`)
		.style('font-family', 'Arial')
		.style('text-anchor', 'start')
		.style("font-size", "40px")
		.style('dominant-baseline', 'hanging')
		.append("tspan")
		.text("of building home gardens")
	mapg.append('text')
		.attr("transform", `translate(${mapWidth/4+50},${400})`)
		.style('font-family', 'Times New Roman')
		.style('text-anchor', 'start')
		.style("font-size", "40px")
		.style('dominant-baseline', 'hanging')
		.append("tspan")
		.text("Yunjie Liang 1007410")

	// .style("font-family","Arial")
	// .style("font-size","30px")

	// font: 'Arial', size: '45px'


	// const lines = text.selectAll('tspan')
	//   .data(Text)
	//   .enter()
	//   .append('tspan')
	//   .attr('x', text.attr('x'))
	//   .attr('dy', '1.2em')
	//   .html(d => d.dot ? '&#x25CF; ' : '')
	//   .append('tspan')
	//   .text(d => d.text)
	//   	.style('font-family', d => d.font)
	//   	.style('font-size', d => d.size)
	//   	.style('font-weight', d => d.bold ? 'bold' : 'normal')
	// .attr('text-anchor', 'start');

}