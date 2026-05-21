let bgImage;
let smallImage;

function preload() {

  bgImage = loadImage("data/statue.jpg");
  smallImage = loadImage("data/cat.jpg");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(0);

  imageMode(CORNER);

  image(
    bgImage,
    0,
    0,
    width,
    height
  );

  imageMode(CENTER);

  image(
    smallImage,
    mouseX,
    mouseY,
    150,
    150
  );

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
