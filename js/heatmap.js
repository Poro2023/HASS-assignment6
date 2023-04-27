drawheatmap()

function drawheatmap() {
	d3.json("json/corr.json").then(function(data) {

		const width = 1800;
		const height = 900;
		const svg = d3.select("#heatmap")
			.append("svg")
			.attr("width", width)
			.attr("height", height);

		const rectWidth = 40;
		const rectHeight = 40;

		// const colorScale = d3.scaleLinear()
		// 	.domain([-0.2, 1])
		// 	.range(["#55ff00", "#FF0000"]);

		var colorScale = d3.scaleSequential(d3.interpolateRgb("#C1FFC1", "#458B74"))
			.domain([0, 220]);
		var change = d3.scaleLinear()
			.domain([-0.2, 1])
			.range([0, 220])

		const g = svg.append("g")
			.attr("transform", (d, i) => `translate(${350},${120})`)


		var contain = svg.append("g")
			.attr("id", "containtext")
			.attr("transform", `translate(${0},${0})`)
		var con0 = contain.append('text')
			.attr("transform", `translate(${50},${80})`)
			.style("font-family", "Microsoft YaHei UI")
			.style("font-size", "40px")
			.append("tspan")
			.text("Correlation Analysis")


		var con1 = contain.append('text')
			.attr("class", "conheat")
			.attr("transform", `translate(${width/2},${80})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("The heatmap displays the results of the correlation analysis, ")

		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("indicating that ")
.append("tspan")
			.text("attitude, subjective norms, PBC, and environmental")
			.style('font-weight', "bold")


		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.style('font-weight', "bold")
			.text("concerns are highly correlated with the intention to build a home ")
					
					
						
			
			
			
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("garden ")
			.style('font-weight', "bold")
			.append("tspan")
			.text("with a Pearson Correlation Coefficient greater than 0.5. This ")
			.style('font-weight', "normal")
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("analysis also verifies the 4 hypotheses we have formulated.")
		var con2 = contain.append('text')
			.attr("class", "conheat")
			.attr("transform", `translate(${width/2},${280})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("The city of residence was inversely related to intention. This is because ")
		con2.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("the city of residence was defined as '1' in the analysis, , while Shanghai ")
		con2.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("was defined as '2'. This can be interpreted to mean ")
.append("tspan")
			.text("that Taiyuan residents ")
			.style('font-weight', "bold")
		con2.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.style('font-weight', "bold")
			.text("have a higher intention to build a home garden than Shanghai ")
			con2.append("tspan")
				.attr('x', 0)
				.attr('dy', '1.2em')
			.text("residents. ")
			.style('font-weight', "bold")

		var con3 = contain.append('text')
			.attr("class", "conheat")
			.attr("transform", `translate(${width/2},${470})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.style('font-weight', "bold")
			.text("Taiyuan residents ")
			.append("tspan")
						.text("show ")
						.style('font-weight', "normal")
				.append("tspan")
							.text("higher intention, more positive attitudes, ")
							.style('font-weight', "bold")		
			
			
			
		con3.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.style('font-weight', "normal")
			.text(", and ")
			.append("tspan")
						.text("stronger environmental concerns ")
						.style('font-weight', "bold")	
				.append("tspan")
							.text("than Shanghai residents. ")
							.style('font-weight', "bold")			
		con3.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.style('font-weight', "normal")
			.text("(Multicollinearity was not a significant issue, as the Pearson Correlation ")
		con3.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("Coefficient) was small.")
			.style('font-weight', "normal")




		svg.selectAll(".conheat")
			.style('font-family', 'Times New Roman')
			.style('text-anchor', 'start')
			.style("font-size", "30px")


















		g.selectAll("g")
			.data(data)
			.enter()
			.append("g")
			.attr("id", (d, i) => "row" + i)
			.attr("transform", (d, i) => `translate(${0},${i*rectHeight})`)
			.selectAll("rect")
			.data(function(d) {
				return d.value
			})
			.enter()
			.append("rect")
			.attr("x", function(d, i) {
				return (i % 11) * rectWidth;
			})
			.attr("width", rectWidth)
			.attr("height", rectHeight)
			.attr("fill", d => colorScale(change(d)));
		//左边文字
		var lefttext = g.append("g")
			.attr("id", "lefttext")
			.selectAll("g")
			.data(data)
			.enter()
			.append("g")
		lefttext.append("text")
			.text((d, i) => d.name)
			.attr("transform", (d, i) => `translate(${-32},${i*rectHeight+rectHeight/2})`)
			.attr("dy", 5)
			.attr("text-anchor", "end") // 设置为右对齐
			.attr("font-size", 20)

		lefttext.append("line")
			.attr("x1", (d) => {
				return -30
			})
			.attr("y1", (d, i) => {
				return i * rectHeight + rectHeight / 2
			})
			.attr("x2", (d) => {
				return 0
			})
			.attr("y2", (d, i) => {
				return i * rectHeight + rectHeight / 2
			})
			.attr("stroke", "black")
			.attr("stroke-width", 2);

		var righttext = g.append("g")
			.attr("id", "righttext")
			.selectAll("g")
			.data(data)
			.enter()
			.append("g")
		righttext.append("text")
			.text((d, i) => d.name)
			.attr("transform", (d, i) =>
				`translate(${i*rectWidth+rectWidth/2+5},${rectHeight*11.8}) rotate(-90)`)
			.attr("text-anchor", "end") // 设置为右对齐
			.attr("font-size", 20)


		righttext.append("line")
			.attr("x1", (d, i) => {
				return i * rectHeight + rectHeight / 2
			})
			.attr("y1", (d, i) => {
				return rectHeight * 11
			})
			.attr("x2", (d, i) => {
				return i * rectHeight + rectHeight / 2
			})
			.attr("y2", (d, i) => {
				return rectHeight * 11 + 10
			})
			.attr("stroke", "black")
			.attr("stroke-width", 2);

		var gsacle = g.append("g")
			.attr("id", "scale")
			.attr("transform", `translate(${rectWidth*11.4},${0})`)
			.selectAll("g")
			.data(d3.range(220))
			.enter()
			.append("g")
		// // 定义颜色渐变比例尺

		var rangedata = [-0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
		// // 添加矩形
		gsacle.append("rect")
			.attr("x", 0)
			.attr("y", function(d, i) {
				return i * 2
			})
			.attr("width", 20)
			.attr("height", 2)
			.attr("fill", function(d) {
				return colorScale(d);
			});
		d3.select("#scale").append("g")
			.selectAll("text")
			.data(rangedata)
			.enter()
			.append("text")
			.text(d => d)
			.attr("transform", (d, i) => `translate(${0},${change(d)*2})`)
			.attr("dx", 20)
			.attr("dy", -1)
			.style("font-size", 15)
		d3.selectAll("text").attr("fill", "black")
	})
}