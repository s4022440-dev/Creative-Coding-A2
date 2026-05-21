let myFont;
let points;
let sampleF;

function preload() {

  myFont = loadFont("data/ACaslonPro-Regular.otf");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  sampleF = 0.1;

  points = myFont.textToPoints(
    'WEEKTHREE',
    (width / 4) - 200,
    height / 2,
    200,
    {
      sampleFactor: sampleF,
      simplifyThreshold: 0
    }
  );

  

}

function draw() {

  background(20);

  stroke(80);
  strokeWeight(2);

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);


  fill(255);
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < points.length; i++) {

    let p = points[i];

    let size = constrain(mouseX / 20, 5, 30);

    ellipse(p.x, p.y, size, size);

  }

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  points = myFont.textToPoints(
    'WEEKTHREE',
    (width / 4) - 200,
    height / 2,
    200,
    {
      sampleFactor: sampleF,
      simplifyThreshold: 0
    }
  );

  redraw();

}
