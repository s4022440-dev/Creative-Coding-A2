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

  for(let i = 0; i < 5; i++){

    image(
      smallImage,
      mouseX + random(-50,50),
      mouseY + random(-50,50),
      100,
      100
    );

  }

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
