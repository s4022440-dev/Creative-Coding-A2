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

  background(10);

  stroke(40);
  strokeWeight(1);

  for(let x = 0; x < width; x += 50){
    line(x, 0, x, height);
  }

  for(let y = 0; y < height; y += 50){
    line(0, y, width, y);
  }

  for (let i = 0; i < points.length; i++) {

    let p = points[i];
    
    stroke(255, 80);

    line(
      p.x,
      p.y,
      mouseX,
      mouseY
    );

    fill(0);
    noStroke();

    ellipse(p.x, p.y, 8, 8);

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
