drawvar()

function drawvar() {


	// 创建数据集
	d3.json("json/age.json").then(function(data) {
		// 创建SVG容器
		const width = 1800
		const height = 800
		const barsvg = d3.select('#bar')
			.append("svg")
			.attr("width", width)
			.attr("height", 900)
			// .style("background-color", "rgba(162, 144, 135, 0.5)");

		// 设置SVG容器尺寸和边距

		const margin = {
			top: 20,
			right: 20,
			bottom: 20,
			left: 20
		};
		const innerWidth = width - margin.left - margin.right;
		const innerHeight = height - margin.top - margin.bottom;

		// 创建一个组容器，并将其平移以留出左右两列的空间
		// barsvg.append("text")
		// 	.attr('transform', `translate(${innerWidth/2-200},${30})`)
		// 	.text("部分专业的最高分和最低分")
		// 	.style("font-size", "35px")
		// 	.style('fill', '#ffff00') // 水平居中

		const g = barsvg.append('g')
			.attr('transform', `translate(${-260},${margin.top*5})`);

		// 创建比例尺和坐标轴
		const xScale = d3.scaleLinear()
			.domain([0, d3.max(data, d => Math.max(d['男'], d['女']))])
			.range([0, innerWidth / 4]);

		const X1 = d3.scaleLinear()
			.domain([-d3.max(data, d => Math.max(d['男'], d['女'])), d3.max(data, d => Math.max(d['男'], d['女']))])
			.range([0, innerWidth / 2])


		g.append("g")
			.attr("class", "x-axis")
			.attr("transform", `translate(${innerWidth / 4+2},${innerHeight-margin.bottom*4})`)
			.call(d3.axisBottom(X1)
				.tickFormat(function(d) {
					console.log(d)
					return Math.abs(d)
				})

			);
	barsvg.selectAll(".x-axis .tick text")
			.attr("font-size", "15px")
		const yScale = d3.scaleBand()
			.domain(data.map(d => d['年龄段']))
			.range([0, innerHeight-200])
			.padding(0)
var contain = barsvg.append("g")
		.attr("id", "containtext")
		.attr("transform", `translate(${50},${160})`)


		var con0 = contain.append('text')
			.attr("transform", `translate(${0},${-70})`)
			.style("font-family","Microsoft YaHei UI")
			.style("font-size","40px")
			.append("tspan")
			.text("Sample Description")
			
	var con1 = contain.append('text')
		.attr("class", "conbar")
		.attr("transform", `translate(${width/2},${-80})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("The descriptive statistics of the sample show that ")
		.append("tspan")
		.text("53% ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("of the ")
		.style('font-weight', "normal")
		
		
		
	con1.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("respondents were female ")
		.append("tspan")
		.text("47% ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("were male. ")
		.style('font-weight', "normal")
		.append("tspan")
		.text("302 ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("and of the ")
		.style('font-weight', "normal")
		.append("tspan")
		.text("638 ")
		.style('font-weight', "bold")
		
		
		
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("samples were collected from ")
		.append("tspan")
		.text("Taiyuan ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("residents, while ")
		.style('font-weight', "normal")
		.append("tspan")
		.text("336 ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("were ")
		.style('font-weight', "normal")
		
		
		
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("collected from of ")
		.append("tspan")
		.text("Shanghai ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("residents. The ")
		.style('font-weight', "normal")
		.append("tspan")
		.text("majority ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("respondents ")
		.style('font-weight', "normal")
		
		
		
	con1.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("in the sample were between the ")	
		.append("tspan")
		.text("ages of 15 and 60, ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("accounting ")
		.style('font-weight', "normal")
		
		
		
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("for ")
			.append("tspan")
			.text("95% ")
			.style('font-weight', "bold")
			.append("tspan")
			.text("of the total sample. Residents were evenly distributed")
			.style('font-weight', "normal")
			
			
			
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("across ")	
			.append("tspan")
			.text("all age groups ")
			.style('font-weight', "bold")
			.append("tspan")
			.text("within this interval. ")
			.style('font-weight', "normal")
			.append("tspan")
			.text("The youngest survey ")
			.style('font-weight', "bold")
			
			
			
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("respondent ")
			.style('font-weight', "bold")
			.append("tspan")
			.text("was ")
			.style('font-weight', "normal")
			.append("tspan")
			.text("15 years old, ")
			.style('font-weight', "bold")
			.append("tspan")
			.text("while the ")
			.style('font-weight', "normal")
			.append("tspan")
			.text("oldest ")
			.style('font-weight', "bold")
			.append("tspan")
			.text("was ")
			.style('font-weight', "normal")
			.append("tspan")
			.text("74 years old. ")
			.style('font-weight', "bold")
			
			
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '2.4em')
			.text("The specific gender and age distribution is shown in the figure.")
			.style("font-weight","bold")

		contain.selectAll(".conbar")
			.style('font-family', 'Times New Roman')
			.style('text-anchor', 'start')
			.style("font-size", "30px")	
			
			
			
			
			
			
			
			
			
			
		





		var filter = barsvg.append("filter")
			.attr("id", "drop-shadow")
			.attr("height", "200%");
		filter.append("feGaussianBlur")
			.attr("in", "SourceAlpha")
			.attr("stdDeviation", 9)
			.attr("result", "blur");
		filter.append("feOffset")
			.attr("in", "blur")
			.attr("dx", 5)
			.attr("dy", 10)
			.attr("result", "offsetBlur");
		var feMerge = filter.append("feMerge");
		feMerge.append("feMergeNode")
			.attr("in", "offsetBlur");
		feMerge.append("feMergeNode")
			.attr("in", "SourceGraphic");


		// d3.select(".domain").style("display", "none")
		// 创建每个柱状图
		const rectHeight = 20;
		const row = g.selectAll('.row')
			.data(data)
			.join('g')
			.attr('transform', (d, i) => `translate(${innerWidth / 2},${yScale(d['年龄段'])+120})`);
		/*左边矩形*/
		var Lrect = row.append('rect')
			.attr('x', function(d) {
				return -xScale(d['男'])
			})
			.attr('y', 0)
			.attr("class", "Lrect")
			.style("fill","#458B74")
			.attr('width', d => xScale(d['男']) + 2)
			.attr('height', rectHeight)
			.style("filter", "url(#drop-shadow)");

		row.append('text')
			.text(d => d["男"])
			.attr('x', -20)
			.attr('y', 15)
			.attr('text-anchor', 'middle')
			.attr('font-size', '12px')
			.style("fill", "black");

		/*右边矩形*/
		row.append('rect')
			.attr('x', 2)
			.attr('y', 0)
			.attr("class", "Rrect")
			.attr('width', d => xScale(d['女']) + 2)
			.attr('height', rectHeight)
			.attr('fill', '	#7FFFD4')
			// .attr("rx", 20) // 设置圆角半径
			// .attr("ry", 20) // 设置圆角半径;
			.style("filter", "url(#drop-shadow)");


		row.append('text')
			.text(d => d["女"])
			.attr('x', 25)
			.attr('y', 15)
			.attr('text-anchor', 'middle')
			.attr('font-size', '12px')

		row.selectAll("rect")
			.style("opacity", 0.7)
			.on("mouseover", function(d) {
				console.log(d3.select(this).attr("class") == "Lrect")
				if (d3.select(this).attr("class") == "Lrect") {
					d3.select(this).style("fill", "#66CDAA").style("opacity", 1)
				} else {
					d3.select(this).style("fill", "	#C1FFC1").style("opacity", 1)
				}
			})
			.on("mouseout", function(d) {

				if (d3.select(this).attr("class") == "Lrect") {
					d3.select(this).style("opacity", 0.7).style("fill", "#458B74")
				} else {
					d3.select(this).style("opacity", 0.7).style("fill", "	#7FFFD4")
				}
			})

		// /*专业文字*/translate(${innerWidth / 2},${yScale(d['年龄段'])-90})
		var test = g.append("g")
			.selectAll("g")
			.data(data)
			.enter()
			.append("g")
			.attr('transform', (d, i) => `translate(${innerWidth / 4-50},${yScale(d['年龄段'])+130})`)
			.append("text")
			.text(function(d) {
				return d["年龄段"]
			})
			.style("font-size", "20px")
			.style("font-weight", "bold")
			.attr('text-anchor', 'end');


		var lendge = g.append('g')
			.attr('transform', `translate(${innerWidth/2+150},${130})`)
			.selectAll("g")
			.data(["Male", "Fmale"])
			.enter()
			.append("g")

			.attr("class", "ledge")
		/*图例*/
		lendge.append("rect")
			.attr('x', 0)
			.attr("id", function(d) {
				return d
			})
			.attr('y', (d, i) => i * 50)
			.attr("height", 30)
			.attr("width", 50)
			.style("fill", function(d, i) {
				if (i == 0)
					return "#458B74"
				else
					return "	#7FFFD4"
			})
			.style("opactity", 0.8)
			.on("mouseover", function(event, d) {
				d3.select(this).style("opacity", 1)
				if (d == "Male")
					d3.selectAll(".Lrect").style("opacity", 1).style("fill", "#66CDAA")
				else
					d3.selectAll(".Rrect").style("opacity", 1).style("fill", "	#C1FFC1")
			})
			.on("mouseout", function(event, d) {
				d3.select(this).style("opacity", 0.8)
				if (d == "Male")
					d3.selectAll(".Lrect").style("opacity", 0.7).style("fill", "#458B74")
				else
					d3.selectAll(".Rrect").style("opacity", 0.7).style("fill", "#7FFFD4")

			})
		/*图例文字*/
		lendge.append("text")
			.attr("fill", "black")
			.style("font-size", "20px")
			.attr('x', 50)
			.attr('y', (d, i) => i * 50 + 20)
			.text(d => d)


	})
}