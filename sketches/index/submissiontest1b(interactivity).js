var spacing = 100;
var circleSize;
var col1;
var col2;
var col3;

function setup() {
  createCanvas(displayWidth, displayHeight);

  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
  col3 = color(random(255), random(255), random(255));

  console.log(col1);
}

function draw() {
  background(255, 122, 122);

  circleSize = (mouseX / 22);
  noFill();
  for (var x = 0; x <= width; x += spacing) {
    for (var y = 0; y <= height; y += spacing) {
      stroke(col1);
      ellipse(x, y, circleSize, circleSize);
      stroke(col2);
      ellipse(x, y, circleSize / 2, circleSize / 2);
      stroke(col3);
      ellipse(x, y, circleSize + 20, circleSize + 20);
    }
  }

  frameRate(2);
}


function mousePressed() {
  col1 = color(random(255), random(255), random(255));
  // col2 = color(100, random(255), 0);
  // col3 = color(100, 0, random(255));
}
