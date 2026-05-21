let osc;

let stars = [];

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(10, 10, 30);

  // sound oscillator
  osc = new p5.Oscillator('sine');

}

function draw() {

  // transparent background for trails
  background(10, 10, 30, 30);


  // draw stars
  for(let i = stars.length - 1; i >= 0; i--){

    let s = stars[i];

    // fade out
    s.alpha -= 2;

    // rotation
    s.rotation += 0.02;

    push();

    translate(s.x, s.y);

    rotate(s.rotation);

    noStroke();

    fill(255, 255, 200, s.alpha);

    drawStar(0, 0, s.size, s.size * 2, 5);

    pop();

    // remove faded stars
    if(s.alpha <= 0){

      stars.splice(i,1);

    }

  }

}


// mouse click
function mousePressed() {

  // start audio
  userStartAudio();

  // random pitch
  let freq = random(200, 800);

  osc.freq(freq);

  osc.start();

  osc.amp(0.5, 0.05);

  // stop sound smoothly
  osc.amp(0, 0.5);

  setTimeout(() => {

    osc.stop();

  }, 500);


  // create star
  stars.push({

    x: mouseX,

    y: mouseY,

    size: random(10, 30),

    alpha: 255,

    rotation: random(TWO_PI)

  });

}


// star shape function
function drawStar(x, y, radius1, radius2, npoints) {

  let angle = TWO_PI / npoints;

  let halfAngle = angle / 2.0;

  beginShape();

  for (let a = 0; a < TWO_PI; a += angle) {

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
