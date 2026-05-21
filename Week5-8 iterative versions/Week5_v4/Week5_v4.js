let bgImage;

let leftImage;
let rightImage;

let followImage;

function preload() {

  bgImage = loadImage("data/statue.jpg");

  leftImage = loadImage("data/ii.jpg");

  rightImage = loadImage("data/paper.jpg");

  followImage = loadImage("data/cat.jpg");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(230);

  imageMode(CORNER);

  image(
    bgImage,
    width/2 - 250,
    height/2 - 350,
    500,
    700
  );

  noStroke();

  fill(0, 120);

  rect(80, 120, 300, 120);

  rect(width - 380, 220, 300, 120);

  rect(width/2 - 200, height - 180, 400, 120);

  if(mouseIsPressed){

    imageMode(CENTER);

    image(
      leftImage,
      230,
      180,
      120,
      120
    );

    image(
      rightImage,
      width - 230,
      280,
      120,
      120
    );

  }

  imageMode(CENTER);

  image(
    followImage,
    mouseX,
    mouseY,
    120,
    120
  );

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
