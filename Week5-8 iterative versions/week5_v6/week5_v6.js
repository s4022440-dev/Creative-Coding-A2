let bgImage;

let leftImage;
let rightImage;
let bottomImage;

let cam;

let clickCount = 0;

function preload() {

  bgImage = loadImage("data/statue.jpg");

  leftImage = loadImage("data/ii.jpg");

  rightImage = loadImage("data/paper.jpg");

  bottomImage = loadImage("data/cat.jpg");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // webcam
  cam = createCapture(VIDEO);

  cam.hide();

}

function draw() {

  background(230);

  // main image
  imageMode(CORNER);

  image(
    bgImage,
    width/2 - 250,
    height/2 - 350,
    500,
    700
  );


  // gray rectangles
  noStroke();

  fill(0, 120);

  rect(80, 120, 300, 120);

  rect(width - 380, 220, 300, 120);

  rect(width/2 - 200, height - 180, 400, 120);


  // show images one by one
  imageMode(CENTER);

  if(clickCount >= 1){

    image(
      leftImage,
      230,
      180,
      120,
      120
    );

  }

  if(clickCount >= 2){

    image(
      rightImage,
      width - 230,
      280,
      120,
      120
    );

  }

  if(clickCount >= 3){

    image(
      bottomImage,
      width/2,
      height - 120,
      180,
      120
    );

  }


  // webcam frame
  stroke(255);

  strokeWeight(3);

  fill(0);

  rect(
    80,
    height - 320,
    300,
    200
  );


  // webcam image
  imageMode(CORNER);

  image(
    cam,
    80,
    height - 320,
    300,
    200
  );


  // black and white webcam
  filter(GRAY);


  // surveillance text
  fill(255);

  noStroke();

  textSize(14);

  text(
    "REC",
    110,
    height - 340
  );

  text(
    "CAM 01",
    260,
    height - 340
  );

  text(
    "ARCHIVE SYSTEM",
    width - 180,
    40
  );

}


// mouse click
function mousePressed(){

  clickCount++;

  // limit clicks
  if(clickCount > 3){

    clickCount = 0;

  }

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
