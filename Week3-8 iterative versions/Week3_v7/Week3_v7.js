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

  stroke(40);
  strokeWeight(2);
  
  for(let x = 0; x < width; x += 50){
  line(x, 0, x, height);
}

for(let y = 0; y < height; y += 50){
  line(0, y, width, y);
}

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);


  fill(0);
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < points.length; i++) {

    let p = points[i];

    let size = constrain(mouseX / 20, 5, 30);

    rect(p.x + random(-3,3),
  p.y + random(-3,3),
  size,
  size);

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
