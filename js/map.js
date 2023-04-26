drawmap()

function drawmap() {
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
	var mapsvg = d3.select("#map")
		.append("svg")
		.attr("id", "mapsvg")
		.attr("width", mapWidth)
		.attr("height", mapHeight);
	var mapg = mapsvg.append("g")
		.attr("transform", `translate(0,50)`)

	var contain = mapsvg.append("g")
		.attr("id", "containtext")
		.attr("transform", `translate(${50},${160})`)
	var con0 = contain.append('text')
		.attr("transform", `translate(${0},${-70})`)
		.style("font-family", "Microsoft YaHei UI")
		.style("font-size", "40px")
		.append("tspan")
		.text("Research Sample")




	var taiyuan = mapsvg.append("g")
		.attr("id", "taiyuan")
		.style("display", "none")
	taiyuan.append("rect")
		.attr("transform", `translate(${0},${0})`)
		.attr("width", 710)
		.attr("height", 350)
		.style("stroke", "black")
		.style("fill", "#EEEED1")
	var con1 = taiyuan.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${40})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("This study included ")
		.append("tspan")
		.text("Taiyuan ")
		.style('font-weight', "bold")
		.append("tspan")
		.style('font-weight', "normal")
		.text("residents as the research ")
	
	
	con1.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("object to increase the generalizability of the findings. ")

	var con2 = taiyuan.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${120})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("The  ")
		.append("tspan")
		.style('font-weight', "bold")
		.text("economic development ")
		.append("tspan")
		.text("in Taiyuan is relatively ")
		.style('font-weight', "normal")
		
	con2.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("lagging behind that of China's economic centre, Shanghai. ")

	var con3 = taiyuan.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${200})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Taiyuan ")
		.append("tspan")
		.style('font-weight', "bold")
		.text("home garden ")
		.append("tspan")
		.style('font-weight', "normal")
		.text("is still in its early stages.")
	var con4 = taiyuan.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${240})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Taiyuan is ")
		.append("tspan")
		.style('font-weight', "bold")
		.text("geographically located ")
		.append("tspan")
		.style('font-weight', "normal")
		.text("in ")
		.append("tspan")
		.style('font-weight', "bold")
		.text("northern China. ")
		
		
		
	var con5 = taiyuan.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${280})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Northern China has a  ")
		.append("tspan")
		.style('font-weight', "bold")
		.text("temperate monsoon climate, ")
		.append("tspan")
		.style('font-weight', "normal")
		.text("with ")

	con5.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("hot, rainy summers and mild, dry winters.")


	var shanghai = mapsvg.append("g")
		.attr("id", "shanghai")
		.style("display", "none")


	shanghai.append("rect")
		.attr("transform", `translate(${0},${0})`)
		.attr("width", 880)
		.attr("height", 350)
		.style("stroke", "black")
		.style("fill", "#EEEED1")

	var con6 = shanghai.attr("id", "taiyuan").append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${50})`) //350
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Shanghai ")
		.style('font-weight', "bold")
		.append("tspan")
		.style('font-weight', "normal")
		.text("residents were chosen as survey subjects as")
		
		
	con6.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("part of the research plan. ")

	var con7 = shanghai.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${130})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Shanghai is ")
		.append("tspan")
		.text("relatively economically developed.")
		.style('font-weight', "bold")

	var con8 = shanghai.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${170})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Although ")
		.append("tspan")
		.text("home garden ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("in Shanghai is still in its infancy, ")
		.style('font-weight', "normal")

	con8.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("it has a  ")
		.append("tspan")
		.text("good history ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("of community garden.")
		.style('font-weight', "normal")

	var con9 = shanghai.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${250})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("Shanghai is ")
		.append("tspan")
		.text("geographically located ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("on the ")
		.style('font-weight', "normal")
		.append("tspan")
		.text("southeast coast. ")
		.style('font-weight', "bold")

	var con10 = shanghai.append('text')
		.attr("class", "conmap")
		.attr("transform", `translate(${0},${290})`)
		.append("tspan")
		.html("&#x25CF")
		.append("tspan")
		.text("A ")
		.append("tspan")
		.text("subtropical monsoon climate ")
		.style('font-weight', "bold")
		.append("tspan")
		.text("dominates the south-eastern ")
		.style('font-weight', "normal")

	con10.append("tspan")
		.attr('x', 0)
		.attr('dy', '1.2em')
		.text("coastal area, with hot and rainy summers and warm and humid winters.")




	mapsvg.selectAll(".conmap")
		.style('font-family', 'Times New Roman')
		.style('text-anchor', 'start')
		.style("font-size", "30px")

	// var tooltip=d3.select("#map")
	// .append("div")
	// .attr("id","tooltip")
	// .style("display", "black")







	;
	// 读取 GeoJSON 数据并绘制地图
	d3.json("json/map.json").then(function(data) {

		const projection = d3.geoMercator();
		projection.fitSize([width, height], data);
		const path = d3.geoPath()
			.projection(projection);
		mapg.selectAll('path')
			.data(data.features)
			.join('path')
			.attr('d', path)
			.attr('id', d => d.properties.name)
			.attr("fill", "#458B74")
			.attr("stroke", "#C1FFC1")
			.attr("stroke-width", 1)


		// 定义圆点数据
		var points = [{
				"name": "太原市",
				"lat": 37.9754317,
				"lon": 112.4979995
			},
			{
				"name": "上海市",
				"lat": 31.2303904,
				"lon": 121.4737021
			},
		];

		// 在SVG元素中添加圆点
		mapg.selectAll(".point")
			.data(points)
			.enter()
			.append("circle")
			.attr("class", "point")
			.attr("cx", function(d) {
				return projection([d.lon, d.lat])[0];
			})
			.attr("cy", function(d) {
				return projection([d.lon, d.lat])[1] + 50;
			})
			.attr("r", 15)
			.attr("fill", function(d) {
				if (d.name == "太原市" || d.name == "上海市")
					return "#ff5500"
			})
			.on("click", function(enent, d) {
				const [x, y] = d3.pointer(event, this);
				console.log(event)
				if (d.name == "太原市") {
					taiyuan.style("display", "block")
						.attr("transform", `translate(${x-710},${y-350})`)
					shanghai.style("display", "none")
					// d3.select(this).attr("fill", "red")
				} else {
					shanghai.style("display", "block")
						.attr("transform", `translate(${x-900},${y-90})`)
					taiyuan.style("display", "none")
				}
			})
			.attr("stroke", "black")
			.attr("stroke-width", 1);

	})
}