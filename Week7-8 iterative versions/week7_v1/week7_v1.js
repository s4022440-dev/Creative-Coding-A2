function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {

  background(15, 17, 26);

  // lighting
  ambientLight(80);

  directionalLight(255, 255, 255, -0.2, 0.5, -1);


  // dreamy cloud
  push();

  rotateY(frameCount * 0.003);

  noStroke();

  fill(255);


  // center cloud
  sphere(60);

  // left cloud parts
  push();
  translate(-70, 0, 0);
  sphere(45);
  pop();

  push();
  translate(-120, 10, 0);
  sphere(35);
  pop();


  // right cloud parts
  push();
  translate(70, 0, 0);
  sphere(45);
  pop();

  push();
  translate(120, 10, 0);
  sphere(35);
  pop();


  // top cloud
  push();
  translate(0, -40, 0);
  sphere(40);
  pop();

  pop();

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 7
