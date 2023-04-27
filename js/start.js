drawstart()
console.log(123)

function drawstart() {

	const margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 40
	};
	const width = 1800 - margin.left - margin.right;
	const height = 800 - margin.top - margin.bottom;

	const svg = d3.select("#start")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top*10 + ")");
	const g = svg.append("g")
	var data = ["Attitude", "Subject norm", "Percetived behavior contornl", "Environmental concern", "Intention"]
	var grect = g.selectAll("g")
		.data(data)
		.enter()
		.append("g")


	// 定义箭头
	svg.append("defs")
		.append("marker")
		.attr("id", "arrowhead")
		.attr("viewBox", "0 0 10 10")
		.attr("refX", 8)
		.attr("refY", 5)
		.attr("markerWidth", 6)
		.attr("markerHeight", 6)
		// .attr("orient", "auto-start-reverse")
		.append("path")
		.attr("d", "M 0 0 L 10 5 L 0 10 z")
		.style("fill", "black");


	// 将SVG元素添加到页面中


	grect.append("rect")
		.attr("x", (d, i) => {
			return d == "Intention" ? 650 : 50
		})
		.attr("y", (d, i) => {
			return d == "Intention" ? 150 : i * 100 + 10
		})
		.attr("width", 300)
		.attr("height", 80)
		.style("fill", "#458B74");
	grect.append("text")
		.attr("x", (d, i) => {
			return d == "Intention" ? 800 : 200
		})
		.attr("y", (d, i) => {
			return d == "Intention" ? 190 : i * 100 + 50
		})
		.attr("font-size", 20)
		.text(d => d)
		.style("font-weight", "bold")
		.attr('text-anchor', 'middle');

	grect.append("line")
		.attr("id", (d, i) => "line" + i)
		.attr("x1", (d, i) => {
			return d == "Intention" ? 500 : 350
		})
		.attr("y1", (d, i) => {
			return d == "Intention" ? 190 : i * 100 + 40
		})
		.attr("x2", (d, i) => {
			return d == "Intention" ? 650 : 500
		})
		.attr("y2", (d, i) => {
			return d == "Intention" ? 190 : i * 100 + 40
		})
		.style("marker-end", function(d, i) {
			return d == "Intention" ? "url(#arrowhead)" : "none"
		})
		// 500)
		// .attr("y1",40)
		// .attr("x2", 500)
		// .attr("y2", 340)	


		.style("stroke", "black")
		.style("stroke-width", 3);
	g.append("g")
		.append("line")
		.attr("x1", 500)
		.attr("y1", 40)
		.attr("x2", 500)
		.attr("y2", 340)
		.style("stroke", "black")
		.style("stroke-width", 3);
		
		var contain=g.append("g")
		.attr("id","containtext")
		.attr("transform", `translate(${1000},${-100})`)
		var con0 = contain.append('text')
			.attr("transform", `translate(${-950},${0})`)
			.style("font-family","Microsoft YaHei UI")
			.style("font-size","40px")
			.append("tspan")
			.text("Hypothesis")
		
		var con1=contain.append('text')
		.style('font-weight', "bold")
		.attr("class", "constart")
			.attr("transform", `translate(${0},${0})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("Hypotheses 1 People's attitudes towards home")
			con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("garden positively influence people’s intention to ")
			con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("build home gardens. ")
	var con2=contain.append('text')
	.style('font-weight', "bold")
	.attr("class", "constart")
		.attr("transform", `translate(${0},${120})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Hypotheses 2 People's subjective norms positively")
		con2.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("affect people's intention to build home gardens. ")
	var con3=contain.append('text')
	.style('font-weight', "bold")
	.attr("class", "constart")
		.attr("transform", `translate(${0},${200})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Hypotheses 3 People's perceived behaviour ")
		
		
		con3.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("control positively affects people's intention to build")
		
		con3.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("home gardens.")
		
		
		var con4=contain.append('text')
		.style('font-weight', "bold")
		.attr("class", "constart")
			.attr("transform", `translate(${0},${320})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("Hypotheses 4 People's environmental concerns ")
		con4.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("positively affect people's intention to build home ")
		con4.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("gardens. ")
		
		contain.selectAll(".constart")
		.style('font-family', 'Times New Roman')
		.style('text-anchor', 'start')
		.style("font-size", "30px")
}