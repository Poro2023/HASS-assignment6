drawmorebar()

function drawmorebar() {

	d3.json("json/morebar.json").then(function(data) {
		// console.log(data)
		const margin = {
			top: 30,
			right: 20,
			bottom: 30,
			left: 40
		};
		const width = 1800 - margin.left - margin.right;
		const height = 900 - margin.top - margin.bottom;

		const svg = d3.select("#morebar")
			.append("svg")
			.attr("width", 1800)
			.attr("height", 900)
			.append("g")
			.attr("transform", `translate(${margin.left+200} ,${margin.top*12} )`);
		var name = ["Strongly Disagree", "Somewhat Disagree", "Neutral", "Somewhat Agree", "Strongly Agree"]
		var color = d3.scaleOrdinal()
			.domain(name)
			.range(['#7FFFD4', '#76EEC6', '#66CDAA', '#458B74', '#528B8B'])

		const x = d3.scaleLinear()
			.domain([0, d3.max(data, d => d3.sum(d.values))])
			.range([0, 900]);

		const y = d3.scaleBand()
			.domain(data.map(d => d.name))
			.range([350, 0])
			.padding(0.1);

		const xAxis = d3.axisBottom(x);
		const yAxis = d3.axisLeft(y);

		var contain = svg.append("g")
			.attr("id", "containtext")
			.attr("transform", `translate(${0},${0})`)


		var con0 = contain.append('text')
			.attr("transform", `translate(${-180},${-270})`)
			.style("font-family", "Microsoft YaHei UI")
			.style("font-size", "40px")
			.append("tspan")
			.text("Variable description:")
		var con1 = contain.append('text')
			.attr("class", "conmorebar")
			.attr("transform", `translate(${-150},${-200})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("All variables were measured using Likert's (1932) five-point scale: ")
		con1.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("Strongly Disagree, Somewhat Disagree,Natural, Somewhat Agree, and Strongly Agree.")
		var con2 = contain.append('text')
			.attr("class", "conmorebar")
			.attr("transform", `translate(${width/2+100},${-80})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("Most of the respondents have a relatively ")
		con2.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("strong intention to build a home garden.")

		var con3 = contain.append('text')
			.attr("class", "conmorebar")
			.attr("transform", `translate(${width/2+100},${0})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("Respondents' attitude toward home gardens ")
		con3.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("is relatively positive.")
		var con4 = contain.append('text')
			.attr("class", "conmorebar")
			.attr("transform", `translate(${width/2+100},${80})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("The respondents perceive the reference group  ")

		con4.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("to have a relatively strong influence.")

		var con5 = contain.append('text')
			.attr("class", "conmorebar")
			.attr("transform", `translate(${width/2+100},${160})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("Most residents believe they are capable of ")

		con5.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("building a home garden.")
		var con6 = contain.append('text')
			.attr("class", "conmorebar")
			.attr("transform", `translate(${width/2+100},${240})`)
			.append("tspan")
			.html("&#x25CF")
			.append("tspan")
			.text("The survey respondents believe that ")


		con6.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text(" environmental issues are relatively serious and  ")

		con6.append("tspan")
			.attr('x', 0)
			.attr('dy', '1.2em')
			.text("need to be addressed.")



		contain.selectAll(".conmorebar")
			.style('font-family', 'Times New Roman')
			.style('text-anchor', 'start')
			.style("font-size", "30px")


		const stack = d3.stack()
			.keys(d3.range(data[0].values.length))
			.value((d, key) => d.values[key])
			.offset(d3.stackOffsetExpand);

		const series = stack(data);
		// console.log(series)
		const bars = svg.append("g")
			.selectAll("g")
			.data(series)
			.join("g")
			.attr("fill", (d, i) => {
				return color(d[i].data.name)
			});

		bars.selectAll("rect")
			.data(d => d)
			.join("rect")
			.attr("x", d => x(d[0]) * 638)
			.attr("y", d => y(d.data.name))
			.attr("width", d => (x(d[1]) - x(d[0])) * 638)
			.attr("height", y.bandwidth());

		svg.append("g")
			.attr("class", "x-axis")
			.attr("transform", "translate(0," + 350 + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "y-axis")
			.call(yAxis);
		// svg.append("g")
		// 			.attr("class", "x axis")
		// 			.call(xAxis);
		svg.selectAll(".x-axis .tick text")
			.attr("font-size", "15px")
		svg.selectAll(".y-axis .tick text")
			.attr("font-size", "15px")

		var lengd = svg.append("g")
			.attr("id", "lenged")
			.attr("transform", `translate(${100},${400})`)
			.selectAll("rect")
			.data(name)
			.enter()
		lengd.append("rect")
			.attr("x", (d, i) => i * 150)
			.attr("y", 0)
			.attr("width", 30)
			.attr("height", 30)
			.attr("fill", d => color(d));
		lengd.append("text")
			.text(d => d)
			.attr("transform", (d, i) => `translate(${i*160},${50})`)
			.attr('text-anchor', 'middle');
	})
}