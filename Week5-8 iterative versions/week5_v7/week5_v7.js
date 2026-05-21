let image1;
let image2;
let image3;
let image4;

let currentState = 0;

// random positions
let x1, y1, r1;
let x2, y2, r2;

function preload() {

  image1 = loadImage("data/ii.jpg");
  image2 = loadImage("data/paper.jpg");

  image3 = loadImage("data/cat.jpg");
  image4 = loadImage("data/statue.jpg");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  generatePositions();

}

function draw() {

  background(255);

  imageMode(CENTER);

  // STATE 1
  // show image1 + image2
  if(currentState == 1){

    push();

    translate(x1, y1);
    rotate(radians(r1));

    image(image1, 0, 0, 250, 250);

    pop();


    push();

    translate(x2, y2);
    rotate(radians(r2));

    image(image2, 0, 0, 250, 250);

    pop();

  }


  // STATE 3
  // show image3 + image4
  if(currentState == 3){

    push();

    translate(x1, y1);
    rotate(radians(r1));

    image(image3, 0, 0, 250, 250);

    pop();


    push();

    translate(x2, y2);
    rotate(radians(r2));

    image(image4, 0, 0, 250, 250);

    pop();

  }

}


// mouse click
function mousePressed(){

  currentState++;

  // cycle states
  if(currentState > 3){

    currentState = 0;

  }

  // generate new random positions
  generatePositions();

}


// random position function
function generatePositions(){

  x1 = random(200, width - 200);
  y1 = random(200, height - 200);
  r1 = random(-30, 30);

  x2 = random(200, width - 200);
  y2 = random(200, height - 200);
  r2 = random(-30, 30);

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
