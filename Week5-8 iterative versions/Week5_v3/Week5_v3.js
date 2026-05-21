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

  noStroke();

  fill(0, 150);

  rect(100, 100, 300, 80);

  rect(width - 400, 200, 250, 120);

  rect(width / 2 - 200, height - 200, 400, 100);


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
