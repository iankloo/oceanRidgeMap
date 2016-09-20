var canvas  = d3.select("#vis").append("canvas")
  .attr("id", "canvas")
  .attr("width", 400)
  .attr("height", 400);

var context = canvas.node().getContext("2d");

function drawDot(dot) {
  context.beginPath();
  context.rect(dot.x, dot.y, 5, 50);
  context.fillStyle = "rgba(0, 0, 255, 0.1)";
  context.fill();
}


function dotGenerator(nDots, maxX, maxY){
  var dots = []
  while(nDots > 0){
    dots.push({x: getRandomInt(0,maxX), y: getRandomInt(0,maxY), speed: 1})
    nDots -= 1
  }
  return dots
}

var dots = dotGenerator(5,400,200)

var frameLength = 2;

for( i = 0; i < dots.length; i++ ) {
  drawDot(dots[i]);
};


setTimeout(function(){
  window.requestAnimationFrame(moveDot);
}, 100);

function moveDot() {

  context.fillStyle = 'rgba(255, 255, 255, .08)';
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
