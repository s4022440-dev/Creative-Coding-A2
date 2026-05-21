let osc;

// guitar notes
let notes = [40, 45, 50, 55, 59, 64];

// string positions
let strings = [];

// visual string vibration
let stringOffset = [0,0,0,0,0,0];

function setup() {

  createCanvas(windowWidth, windowHeight);

  // sound oscillator
  osc = new p5.Oscillator('sawtooth');

  osc.start();

  osc.amp(0);


  // create string positions
  for(let i = 0; i < 6; i++){

    strings.push(
      height/2 - 120 + i * 45
    );

  }

}

function draw() {

  background(15);


  // ---------- GUITAR BODY ----------
  noStroke();

  fill(35);

  ellipse(
    width/2 - 180,
    height/2,
    420,
    520
  );

  ellipse(
    width/2 + 120,
    height/2,
    380,
    480
  );


  // center cut
  fill(15);

  ellipse(
    width/2 - 20,
    height/2,
    120,
    120
  );


  // ---------- NECK ----------
  fill(45);

  rect(
    width/2 + 150,
    height/2 - 140,
    500,
    280,
    20
  );


  // ---------- HEAD ----------
  fill(60);

  rect(
    width/2 + 620,
    height/2 - 100,
    120,
    200,
    20
  );


  // tuning pegs
  fill(180);

  for(let i = 0; i < 3; i++){

    ellipse(
      width/2 + 700,
      height/2 - 70 + i * 70,
      20,
      20
    );

    ellipse(
      width/2 + 660,
      height/2 - 70 + i * 70,
      20,
      20
    );

  }


  // ---------- FRETS ----------
  stroke(120);

  strokeWeight(3);

  for(let i = 0; i < 12; i++){

    let x = width/2 + 180 + i * 35;

    line(
      x,
      height/2 - 140,
      x,
      height/2 + 140
    );

  }


  // ---------- STRINGS ----------
  for(let i = 0; i < strings.length; i++){

    let y = strings[i];

    
    // vibration decay
    stringOffset[i] *= 0.9;


    // glow when hovering
    if(abs(mouseY - y) < 12){

      stroke(0, 200, 255);

      strokeWeight(4);

    } else {

      stroke(255);

      strokeWeight(2);

    }


    // curved vibrating strings
    noFill();

    beginShape();

    for(let x = width/2 - 360; x <= width/2 + 720; x += 20){

      let wave = sin(frameCount * 0.3 + x * 0.02) * stringOffset[i];

      vertex(x, y + wave);

    }

    endShape();

  }


  // ---------- PICKUPS ----------
  noStroke();

  fill(80);

  rect(
    width/2 - 80,
    height/2 - 70,
    120,
    30,
    8
  );

  rect(
    width/2 + 20,
    height/2 + 20,
    120,
    30,
    8
  );


  // ---------- TITLE ----------
  fill(255);

  textAlign(CENTER);

  textSize(30);

  text(
    "CYBER ELECTRIC GUITAR",
    width/2,
    80
  );

  textSize(16);

  text(
    "Click or drag across the strings",
    width/2,
    115
  );

}


// play guitar string
function playString(i){

  osc.freq(
    midiToFreq(notes[i])
  );

  osc.amp(0.4, 0.05);

  osc.amp(0, 0.4);

  
  // vibration
  stringOffset[i] = 12;

}


// click strings
function mousePressed(){

  userStartAudio();

  checkStrings();

}


// drag for strumming
function mouseDragged(){

  checkStrings();

}


// detect strings
function checkStrings(){

  for(let i = 0; i < strings.length; i++){

    let y = strings[i];

    if(abs(mouseY - y) < 10){

      playString(i);

    }

  }

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 7
