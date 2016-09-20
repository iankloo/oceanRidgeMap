var canvas  = d3.select("#vis").append("canvas")
  .attr("id", "canvas")
  .attr("width", 400)
  .attr("height", 400);

var context = canvas.node().getContext("2d");

function drawDot(dot) {
  context.beginPath();
  context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
  context.fillStyle = "rgba(255, 0, 0, 0.5)";
  context.fill();
}


function dotGenerator(nDots, maxX, maxY){
  var dots = []
  while(nDots > 0){
    dots.push({x: getRandomInt(0,400), y: getRandomInt(0,400), radius: 2, speed: 1})
    nDots -= 1
  }
  return dots
}

var dots = dotGenerator(50,400,400)

var frameLength = 1;

for( i = 0; i < dots.length; i++ ) {
  drawDot(dots[i]);
};


setTimeout(function(){
  window.requestAnimationFrame(moveDot);
}, 100);

function moveDot() {

  context.fillStyle = 'rgba(255, 255, 255, .15)';
  context.fillRect(0, 0, 400, 400);

  //context.clearRect(0, 0, 400, 400)

  for( i = 0; i < dots.length; i++ ) {
    if(dots[i].x > 400) {
      dots[i].x = 0
    }
    dots[i].x += frameLength * dots[i].speed;
    drawDot(dots[i])

  }

  window.requestAnimationFrame(moveDot)
};


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
