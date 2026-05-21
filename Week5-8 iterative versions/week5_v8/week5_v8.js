let image1;
let image2;
let image3;
let image4;

let myFont;

let currentState = 0;

let x1, y1, r1, s1;
let x2, y2, r2, s2;

function preload() {

  image1 = loadImage("data/ii.jpg");
  image2 = loadImage("data/paper.jpg");

  image3 = loadImage("data/cat.jpg");
  image4 = loadImage("data/statue.jpg");

  myFont = loadFont("data/ACaslonPro-Regular.otf");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  textFont(myFont);

  generatePositions();

}

function draw() {

  background(255);

  imageMode(CENTER);


  if(currentState == 0 || currentState == 2){

    noStroke();

    fill(45, 70, 55);

    textSize(80);

    textAlign(CENTER, CENTER);

    text(
      "ARCHIVE",
      width / 2,
      height / 2
    );


    // light gold
    fill(210, 190, 140);

    textSize(40);

    textAlign(LEFT, CENTER);

    text(
      "silent memories",
      80,
      height - 80
    );

  }


  if(currentState == 1){

    push();

    translate(x1, y1);

    rotate(radians(r1));

    image(
      image1,
      0,
      0,
      s1,
      s1
    );

    pop();


    push();

    translate(x2, y2);

    rotate(radians(r2));

    image(
      image2,
      0,
      0,
      s2,
      s2
    );

    pop();

  }


  if(currentState == 3){

    push();

    translate(x1, y1);

    rotate(radians(r1));

    image(
      image3,
      0,
      0,
      s1,
      s1
    );

    pop();


    push();

    translate(x2, y2);

    rotate(radians(r2));

    image(
      image4,
      0,
      0,
      s2,
      s2
    );

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

  generatePositions();

}


function generatePositions(){

  x1 = random(250, width - 250);
  y1 = random(250, height - 250);

  x2 = random(250, width - 250);
  y2 = random(250, height - 250);

  r1 = random(-30, 30);
  r2 = random(-30, 30);

  s1 = random(180, 350);
  s2 = random(180, 350);

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
