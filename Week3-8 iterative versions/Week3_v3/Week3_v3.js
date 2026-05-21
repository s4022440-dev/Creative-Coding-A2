let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/ACaslonPro-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sampleF = 0.1;

  points = myFont.textToPoints('WEEKTHREE', (width / 4) - 200, height / 2, 200, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

  noLoop();
}

function draw() {
  background(100); 

  stroke(200, 0, 0);       
  strokeWeight(2);         
  line(width / 2, 0, width / 2, height);  
  line(0, height / 2, width, height / 2); 

  fill(255,0,0);       
  stroke(0);       
  strokeWeight(1);

  for (let i = 0; i < points.length; i++) {
    
    let p = points[i];

    ellipse(p.x, p.y, 10, 10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  points = myFont.textToPoints('WEEKTHREE', (width / 4) - 200, height / 2, 200, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

  redraw();
}
