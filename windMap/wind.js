function circleAnimate(selection) {
    selection
        .attr('cx', 0)
        .attr('cy', function(d){return d})
        .attr('r', 1)
        .attr('opacity',0)
        .transition()
        .duration(1000)
        .ease("linear")
        .attr('cx',  function(){return getRandomInt(500,1000)})
        .attr('cy',  function(d){return d})
        .attr('opacity',.8)
        .delay(getRandomInt(0,500))
        .each("end", function(){d3.select(this).call(circleAnimate)});
};

d3.select('svg')
  .selectAll('circle')
  .data(range(0,500))
  .enter()
  .append('circle')
  .call(circleAnimate);
  
  
 function range(start, count) {
      return Array.apply(0, Array(count))
        .map(function (element, index) { 
          return index + start;  
      });
    }
    
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

