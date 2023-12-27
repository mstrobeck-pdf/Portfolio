function _1(htl){return(
htl.html`<h1> IGME-460 Project 1</h1>
<h3> CO2 emissions (kt) - Liquid fuel consumption</h3>`
)}

function _2(htl){return(
htl.html`For this project, I chose to focus originally on pollution in our air produced by different cities but I found more interest in the use of liquid fuel consumption. I had a hard time locating a dataset larger than 58 since most of this data dates back to 1960 at the latest, so to make up for the 100 dataset minimum I did two different tables based on liquid fuel consumptions as I felt it was important to compare that of the United States to a more cleaner country in terms of liquid fuel consumption.
<br> <br>
In the attachments section of Observable I have included the two following datasets for both United States and Canada as well as the original dataset containing information from every other country.
<br> <br>
The Story:

The use of liquid fuel consumption became well-known by the 1960s and continues to be one of the main sources of fuel consumption up to 2016 based on the recorded data. According to the original dataset, the United States alone uses more liquid fuel than every country combined and this helps demonstrate why the United States is one of the top countries contributing to climate change. For this project, I focused on the United States and Canada to show the differences in liquid fuel being used seeing as Canada is often the one country we are often compared to. In comparison to our country, Canada has drastically less liquid fuel being consumed and my thoughts behind this are due to the fact almost 80% of their country is inhabitable due to the weather and temperatures. Canada is a growing country and has always been well know for their environmental standards, but even in their largest cities we often see people walking more or taking more environmental friendly methods of transport when possible. As most of the United States has a large population and massive cities, we often still see less of a environmental friendly approach due to other factors in these cities such as crime and inaccessibility. Alongside our production factories, liquid fuel is heavily used in our country compared to that of Canada.
<br>
Based on my bar graph(s) below, the visuals that lead to this message was simply how quickly the United State's graph jumped to the higher numbers compared to that of Canada.`
)}

async function _dataFile1(FileAttachment){return(
await FileAttachment("fuel_US.csv").text()
)}

async function _dataFile2(FileAttachment){return(
await FileAttachment("fuel_Canada.csv").text()
)}

function _dataset2(d3,dataFile2){return(
d3.csvParse(dataFile2, (row) => ({
  year: parseInt(row.year),
  fuel: parseInt(row.liquid_fuel),
}))
)}

function _dataset1(d3,dataFile1){return(
d3.csvParse(dataFile1, (row) => ({
  year: parseInt(row.year),
  fuel: parseInt(row.liquid_fuel),
}))
)}

function _w(){return(
800
)}

function _h(dataset1){return(
dataset1.length * 23
)}

function _years(dataset1){return(
dataset1.map((d) => d.year)
)}

function _xScale(d3,dataset1,w){return(
d3.scaleLinear()
  .domain([0, d3.max(dataset1, (d) => d.fuel)])
  .rangeRound([0, w - 80])
)}

function _yScale(d3,years,h){return(
d3.scaleBand()
  .domain(years)
  .rangeRound([20, h])
)}

function _colorScale(d3,dataset1){return(
d3.scaleLinear()
  .domain([0, d3.max(dataset1, (d) => d.fuel)])
  .range(['#F8FC86', '#85DBBC'])
)}

function _colorScaleC(d3,dataset2){return(
d3.scaleLinear()
  .domain([0, d3.max(dataset2, (d) => d.fuel)])
  .range(['#F7FFA9', '#81ED6B'])
)}

function _14(htl){return(
htl.html`<h2> United States Liquid Fuel Consumption`
)}

function _15(makeChartUS,dataset1){return(
makeChartUS(dataset1)
)}

function _makeChartUS(dataset1,d3,w,h,yScale,colorScale,xScale,dataset2,colorScaleC){return(
(dataset) => {

  let datasetUpdate = dataset1;
  dataset.sort((a,b) => b.year - a.year);
  const chart = d3.create('svg')
    .attr('width', w)
    .attr('height', h);

  //Information for the US data
  function usData() {
    datasetUpdate = dataset1;
    chart.selectAll('rect')
      .data(datasetUpdate)
      .join('rect')
      .attr('x', 80)
      .attr('y', (d) => yScale(d.year))
      .attr('height', 20)
      .style('fill', (d) => colorScale(d.fuel))
      .attr('width', (d) => xScale(0))
      
    .transition()
      .duration(1000)
      .delay(100)
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', (d) => colorScale(d.year))
      
    .transition()
      .duration(1000)
      .delay(100)
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', '#50DE63')

    .transition()
      .duration(1000)
      .delay(100)
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', (d) => colorScale(d.fuel))
  }

  //The information for the Canada graph
    function CanadaGraph() { 
    datasetUpdate = dataset2;

    chart.selectAll('rect')
    .data(datasetUpdate)
    .join('rect')
    .attr('x', 80)
    .attr('y', (d) => yScale(d.year))
    .attr('height', 20)
    .style('fill', (d) => colorScaleC(d.fuel))
    .attr('width', (d) => xScale(0))

    .transition()
      .duration(1000)
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', (d) => colorScaleC(d.year))
      
    .transition()
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', '#ECFFB0')

    .transition()
      .delay(100)
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', (d) => colorScaleC(d.fuel))
    
  }
  usData();
  //CanadaGraph();
  
  //axes
  chart.append('g')
    .classed('axis', true)
    .attr('transform', `translate(80, ${h - 20})`)
    .call(d3.axisBottom(xScale));

  chart.append('g')
    .classed('axis', true)
    .attr('transform', `translate(80,0)`)
    .call(d3.axisLeft(yScale));

return chart.node();
}
)}

function _17(htl){return(
htl.html`<h2> Canada Liquid Fuel Consumption`
)}

function _18(makeChartCanada,dataset2){return(
makeChartCanada(dataset2)
)}

function _makeChartCanada(d3,w,h,dataset2,yScale,colorScale,xScale,colorScaleC){return(
(dataset) => {
  
  dataset.sort((a,b) => b.year - a.year);
  const chart = d3.create('svg')
    .attr('width', w)
    .attr('height', h);

  chart.selectAll('rect')
    .data(dataset2)
    .join('rect')
    .attr('x', 80)
    .attr('y', (d) => yScale(d.year))
    .attr('height', 20)
    .style('fill', (d) => colorScale(d.fuel))
    .attr('width', (d) => xScale())

    .transition()
      .duration(1000)
      .attr('width', (d) => xScale(d.fuel))

    .transition()
      .duration(1000)
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', (d) => colorScaleC(d.year))
      
    .transition()
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', '#ECFFB0')

    .transition()
      .delay(100)
      .attr('width', (d) => xScale(d.fuel))
      .style('fill', (d) => colorScaleC(d.fuel))
  

  //axes
  chart.append('g')
    .classed('axis', true)
    .attr('transform', `translate(80, ${h - 20})`)
    .call(d3.axisBottom(xScale));

  chart.append('g')
    .classed('axis', true)
    .attr('transform', `translate(80,0)`)
    .call(d3.axisLeft(yScale));
  
  return chart.node() 
}
)}

function _20(md){return(
md`
---

## Conclusion`
)}

function _21(htl){return(
htl.html`In conclusion, when comparing the United States against a country with a great deal of inhabitable land as well as more environmental standards such as Canada, the data can be a bit misleading given population differences and the standards that each country holds themselves accountable for. For example, the United States uses the most amount of liquid fuel but it also has more of an industrial form of economy where you are likely to find more pollutants similiar to that of China and their mass production. When comparing a smaller country such as Canada and their economy, they lean towards less consumption of fuel compared to these larger countries. 
<br>
<br>
One resource I recommend looking into is this data provided by The World Bank showing each country and their liquid fuel consumption. According to a long list of data, the United States consumes more than half of the consumption of liquid fuel. This website also helps demonstrate and explain the trends in various countries when it comes to their liquid fuel consumption from 1960s onward to 2016. Given the pandemic from 2020, it raises questions as to how liquid fuel consumption was affected by the pandemic and if it hindered some countries.
<br>
LINK: https://data.worldbank.org/indicator/EN.ATM.CO2E.LF.KT`
)}

function _22(md){return(
md`
---

## Conclusion - About the Code`
)}

function _23(htl){return(
htl.html`The base of the code was developed off of assignments one and two. When it came to merging both my graphs together into one, I had more problems than I want to admit. For example, my Observable pages kept breaking to the point nothing would show and the data I will have imported would quickly disappear. The one feature I worked heavily on is a drop-down menu that updates the graph to the Canada graph from the United States graph. This can partially be seen in makeChartUS. I relied heavily on the use of the textbook but still had issues trying to combine all my data into one chart and to show the different per year in each country. For example, chapter 9 of the textbook, pages 154 to 157 were used to figure this out and for some reason it would not work on my end. I even tried recreating the data provided in the book to find my problem.`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["fuel_Canada.csv", {url: new URL("./files/1b6b0167f3487a65583f22f236a11371bcd6b8a1307df329dd6051f55162d68d5967240b76f54905e2c4c72995a50143442bc48d543b7ce34a3f0296db3e501b.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["fuel_US.csv", {url: new URL("./files/8af2bf0fc496c8ddb3a1e8387653ad9aa1b978fad32d373b660a886e08c00a2af59c63f67cb2aeecc7a562216ccf3528e62e881d144c8081214c819cb7b5e60d.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["htl"], _1);
  main.variable(observer()).define(["htl"], _2);
  main.variable(observer("dataFile1")).define("dataFile1", ["FileAttachment"], _dataFile1);
  main.variable(observer("dataFile2")).define("dataFile2", ["FileAttachment"], _dataFile2);
  main.variable(observer("dataset2")).define("dataset2", ["d3","dataFile2"], _dataset2);
  main.variable(observer("dataset1")).define("dataset1", ["d3","dataFile1"], _dataset1);
  main.variable(observer("w")).define("w", _w);
  main.variable(observer("h")).define("h", ["dataset1"], _h);
  main.variable(observer("years")).define("years", ["dataset1"], _years);
  main.variable(observer("xScale")).define("xScale", ["d3","dataset1","w"], _xScale);
  main.variable(observer("yScale")).define("yScale", ["d3","years","h"], _yScale);
  main.variable(observer("colorScale")).define("colorScale", ["d3","dataset1"], _colorScale);
  main.variable(observer("colorScaleC")).define("colorScaleC", ["d3","dataset2"], _colorScaleC);
  main.variable(observer()).define(["htl"], _14);
  main.variable(observer()).define(["makeChartUS","dataset1"], _15);
  main.variable(observer("makeChartUS")).define("makeChartUS", ["dataset1","d3","w","h","yScale","colorScale","xScale","dataset2","colorScaleC"], _makeChartUS);
  main.variable(observer()).define(["htl"], _17);
  main.variable(observer()).define(["makeChartCanada","dataset2"], _18);
  main.variable(observer("makeChartCanada")).define("makeChartCanada", ["d3","w","h","dataset2","yScale","colorScale","xScale","colorScaleC"], _makeChartCanada);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["htl"], _21);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["htl"], _23);
  return main;
}
