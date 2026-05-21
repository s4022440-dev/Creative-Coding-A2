let osc;

let stars = [];

// Twinkle Twinkle Little Star melody
let melody = [

  262, 262, 392, 392, 440, 440, 392,
  349, 349, 330, 330, 294, 294, 262

];

let noteIndex = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(10, 10, 30);

  // sound oscillator
  osc = new p5.Oscillator('sine');

}

function draw() {

  background(10, 10, 30);


  // draw stars
  noStroke();

  fill(255, 255, 200);

  for(let i = 0; i < stars.length; i++){

    let s = stars[i];

    drawStar(s.x, s.y, 10, 20, 5);

  }


  // instruction text
  fill(255);

  textAlign(CENTER, CENTER);

  textSize(20);

  text(
    "Click to play Twinkle Twinkle Little Star",
    width / 2,
    50
  );

}


// mouse click
function mousePressed() {

  // start audio
  userStartAudio();


  // play next note
  osc.freq(melody[noteIndex]);

  osc.start();

  osc.amp(0.5, 0.05);

  osc.amp(0, 0.3);


  setTimeout(() => {

    osc.stop();

  }, 300);


  noteIndex++;

  if(noteIndex >= melody.length){

    noteIndex = 0;

  }


  // create star
  stars.push({

    x: mouseX,
    y: mouseY

  });

}


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
