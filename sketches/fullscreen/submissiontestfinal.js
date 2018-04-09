var mic; // to get audio input from mic
let fft;
let input;


var spacing = 80;
var circleSize;
var col1;
var col2;
var col3;

var objRotateX = 0;
var objRotateY = 0;
var objRotateZ = 0;



function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);

  frameRate(10);



  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
  col3 = color(random(255), random(255), random(255));

  input = new p5.AudioIn();

  input.start();




  console.log(col1);
}

function draw() {
  background(255, 122, 122);
  doAnimate();
  objRotate();

  // audio level from mic is always from 0 to 1.
  // we will have to map to desired range.
  var vol = mic.getLevel();
  circleSize = map(vol, 0, 1, -10, 100);

  let spectrum = fft.analyze();

  let lowlvls = fft.getEnergy("bass", "lowMid");
  let midlvls = fft.getEnergy("mid", "highMid");
  let highlvls = fft.getEnergy("treble");

  if (lowlvls) {
    background(col1);
  }

  if (midlvls) {
    background(col2);
  }

  if (highlvls) {
    background(col3);
  }


  let volume = input.getLevel();
  let z = random(-10, 100);
  let r = map(z, 0, width, -100, 50);

    // If the volume > 0.1,  a rect is drawn at a random location.
    // The louder the volume, the larger the rectangle.
    let threshold = 10;
    if (volume < threshold) {

  fill(random(255), random(255), random(255));
  translate(-width/2, -height/2);
  // scale(0.1);

  let n = 0;
  for (var x = 0; x <= width; x += 50 + random(10, 100) ) {
    for (var y = 0; y <= height; y += 100) {
      push();
      translate(x, y);
      // rect(x, y, random(80), random(80));
      //plane(random(10, 80), random(10, 80));
      box(random(-10, 100), random(-10, 100), random(-10, 100));
      pop();

      n++;
      if(midlvls){
      stroke(col1);
      fill(col1);
      // noStroke();
      let movex = x * random(-550,550);
      let mover = r * random(-200,400);

      // ellipse(movex, y, mover/2);
    }

    // if(lowlvls){
    //
    //   stroke(col2 = color(200, random(255), 0));
    //   noStroke();
    //
    //   rect(rotatex, y/2, 100, 100);
    //   push();
    //   rotatex = x + rotateZ(PI/4);
    //   let rotatex = x;
    //   rotateZ(PI/random());
    //   translate(x, y/4);
    //   plane(10, 50);
    //   pop();
    // }

    if(highlvls){
      // stroke(col3);
      fill(col3);
      noStroke();
      let movey = y + random(-100,100);
      // ellipse(random(x), movey, circleSize - 10);
    }
    }
  }

  //rect(x, y, 1100, 1100);
}



}

function doAnimate() {
  // increment animation variables
  objRotateX -= 4;
  objRotateY -= 2.5;
  objRotateZ -= 1.6;
}

function objRotate() {
  rotateX(radians(objRotateX));
  rotateY(radians(objRotateY));
  rotateZ(radians(objRotateZ));
}
