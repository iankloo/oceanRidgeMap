var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;

var FPS = 100;

var canvas;
var context;
var dot;

init();

function init() {
  canvas = document.getElementById('canvas');

  if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    createTrail();

    setInterval(loop, 1000 / FPS);
  }
}

function createTrail() {
  dot = {
    x: 100,
    y: 100,
    speed: 2,
    direction: Math.PI * 2 * Math.random()
  }
}

function updatePosition() {
  var dx = dot.x + dot.speed * Math.cos(dot.direction);
  var dy = dot.y + dot.speed * Math.sin(dot.direction);

  if (dx < 0 || dx > CANVAS_WIDTH || dy < 0 || dy > CANVAS_HEIGHT) {
    dot.direction = Math.PI * 2 * Math.random();
    updatePosition();
  } else {
    dot.x = dx;
    dot.y = dy;
  }
}

function loop() {
  updatePosition();

  // Draw over the whole canvas to create the trail effect
  context.fillStyle = 'rgba(255, 255, 255, .05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the dot
  context.beginPath();
  context.fillStyle = '#ff0000';
  context.moveTo(dot.x, dot.y);
  context.arc(dot.x, dot.y, 1, 0, Math.PI*2, true);
  context.fill();
}
