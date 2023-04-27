makecontain()

function makecontain() {
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
	var mapsvg = d3.select("#contain")
		.append("svg")
		.attr("id", "titlesvg")
		.attr("width", mapWidth)
		.attr("height", mapHeight);
	var mapg = mapsvg.append("g")
		.attr("transform", `translate(${0},0)`)


	const text = mapg.append('text')
		.attr("transform", `translate(${mapWidth/20},${50})`)
		.style('text-anchor', 'start')
		.style('dominant-baseline', 'hanging')
	/*
	Georgia
	Verdana
	Times New Roman
	Helvetica
	*/
	text.append("tspan")
		.text("Research Introduction")
		.style("font-size", "40px")
		.style('font-family', 'Microsoft YaHei UI')

	var con1 = mapg.append('text')
		.attr("transform", `translate(${mapWidth/20},${200})`)
		.style('font-family', 'Times New Roman')
		.style('text-anchor', 'start')
		.style("font-size", "35px")
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("In ")
		.append("tspan")
		.text("China, ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("with urbanization, it is widely discussed how to create ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("more green space in limited urban areas.")
		.style('font-weight', "bold")



	con1.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.style('font-weight', "normal")
		.text("Encouraging residents to build ")
		.append("tspan")
		.text("home gardens ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("can effectively increase urban green space while helping")
		.style('font-weight', "normal")


	con1.append("tspan")
		.attr("x", 0)
		.attr("dy", "1.2em")
		.style('font-weight', "normal")
		.text("to control and mitigate the urban heat island effect. Based on the ")
		.append("tspan")
		.text("Theory of Planned Behavior (TPB), ")
		.style('font-weight', "bold")


	con1.append("tspan")
		.attr("x", 0)
		.attr("dy", "1.2em")
		.style('font-weight', "normal")
		.text("this study proposes an extended TPB model with the addition of environmental concerns, with the aim of")
	con1.append("tspan")
		.attr("x", 0)
		.attr("dy", "1.2em")
		.style('font-weight', "normal")
		.text("elucidating the factors that influence residents' intentions to build home gardens. ")
	var con2 = mapg.append('text')
		.attr("transform", `translate(${mapWidth/20},${420})`)
		.style('font-family', 'Times New Roman')
		.style('text-anchor', 'start')
		.style("font-size", "35px")
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("A ")
		.append("tspan")
		.text("quantitative research ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("method was used to obtain primary data through a questionnaire survey of ")
		.style('font-weight', "normal")
		.append("tspan")
		.text("Taiyuan	")
		.style('font-weight', "bold")

	con2.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("and Shanghai citizens.")
		.append("tspan")
		.text("The results confirm ")
		.style('font-weight', "normal")
		.append("tspan")
		.text("that intention, subjective norms, Perceived Behavior ")
		.style('font-weight', "bold")


	con2.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("Control (PBC), and environmental concerns ")
		.append("tspan")
		.text("all have significant positive impacts on people's intention ")
		.style('font-weight', "normal")
	con2.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("to build home gardens. ")
		.style('font-weight', "normal")




	// mapg.append('text')
	// 	.attr("transform", `translate(${mapWidth/20},${400})`)
	// 	.style('font-family', 'Times New Roman')
	// 	.style('text-anchor', 'start')
	// 	.style("font-size", "40px")
	// 	.style('dominant-baseline', 'hanging')
	// 	.append("tspan")
	// 	.text("Yunjie Liang 1007410")

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