let osc;

let stars = [];

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(10, 10, 30);

  // sound
  osc = new p5.Oscillator('sine');

}

function draw() {

  // dark background
  background(10, 10, 30);


  // draw stars
  noStroke();

  fill(255, 255, 200);

  for(let i = 0; i < stars.length; i++){

    let s = stars[i];

    drawStar(s.x, s.y, 10, 20, 5);

  }

}


// mouse click
function mousePressed() {

  // start audio
  userStartAudio();

  // random sound pitch
  osc.freq(random(200, 800));

  osc.start();

  osc.amp(0.5, 0.05);

  // stop sound
  osc.amp(0, 0.3);

  setTimeout(() => {

    osc.stop();

  }, 300);


  // create star
  stars.push({

    x: mouseX,
    y: mouseY

  });

}


// star function
function drawStar(x, y, radius1, radius2, npoints) {

  let angle = TWO_PI / npoints;

  let halfAngle = angle / 2.0;

  beginShape();

  for(let a = 0; a < TWO_PI; a += angle){

    let sx = x + cos(a) * radius2;

    let sy = y + sin(a) * radius2;

    vertex(sx, sy);

    sx = x + cos(a + halfAngle) * radius1;

    sy = y + sin(a + halfAngle) * radius1;

    vertex(sx, sy);

  }

  endShape(CLOSE);

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 7
