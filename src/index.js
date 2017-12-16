var chartData = [];


d3.csv("src/animal.csv", function(data) {
	console.log(data[0].Looks);
	data.forEach(function(d) {
		var item = {
			date: "",
			count: 0
		};
		var num = 0;
		
		data.forEach(function(i){
			
			if (d.Date === i.Date){
				num++;
			}
		})
		var bop = new Date(d.Date)
		item.date = bop;
	    item.count = num;
	    chartData.push(item);
	    num = 0;

	});
  	
});

console.log(chartData);


var chart1 = calendarHeatmap()
              .data(chartData)
              .selector('.container')
              .colorRange(['#D8E6E7', '#218380'])
              .tooltipEnabled(true)
              .onClick(function (data) {
                console.log('onClick callback. Data:', data);
              });
chart1(); 