let bgImage;

let leftImage;
let rightImage;
let bottomImage;

let cam;

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


  // show images when mouse pressed
  if(mouseIsPressed){

    imageMode(CENTER);

    // left image
    image(
      leftImage,
      230,
      180,
      120,
      120
    );

    // right image
    image(
      rightImage,
      width - 230,
      280,
      120,
      120
    );

    // bottom image
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


  // monitor text
  fill(255);

  noStroke();

  textSize(18);

  text(
    "LIVE CAMERA",
    120,
    height - 340
  );

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
