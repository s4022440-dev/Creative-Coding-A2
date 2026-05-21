function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {

  // sky blue background
  background(135, 206, 235);


  ambientLight(120);

  directionalLight(255, 255, 255, -0.2, 0.5, -1);


  push();

  translate(0, 200, 0);

  rotateX(HALF_PI);

  noStroke();

  fill(80, 180, 100);

  plane(2000, 2000);

  pop();


  drawCloud(
    -400 + frameCount * 0.5,
    -150,
    0
  );


  drawCloud(
    -900 + frameCount * 0.4,
    -50,
    -200
  );


  drawCloud(
    -1400 + frameCount * 0.6,
    -220,
    100
  );


  drawCloud(
    -1800 + frameCount * 0.45,
    -120,
    -100
  );

}


// cloud function
function drawCloud(x, y, z){

  push();

  translate(x, y, z);

  noStroke();

  fill(255);


  sphere(60);


  push();
  translate(-70, 0, 0);
  sphere(45);
  pop();

  push();
  translate(-120, 10, 0);
  sphere(35);
  pop();


  push();
  translate(70, 0, 0);
  sphere(45);
  pop();

  push();
  translate(120, 10, 0);
  sphere(35);
  pop();


  push();
  translate(0, -40, 0);
  sphere(40);
  pop();

  pop();

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


function keyPressed() {

  if (key === 's') {

    saveCanvas('dreamy_clouds', 'jpg');

  }

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 7
