let osc;

// guitar string notes (low to high)
let notes = [40, 45, 50, 55, 59, 64];

// string positions
let strings = [];

function setup() {

  createCanvas(windowWidth, windowHeight);

  // sound oscillator
  osc = new p5.Oscillator('triangle');

  osc.start();

  osc.amp(0);

  
  // create 6 guitar strings
  for(let i = 0; i < 6; i++){

    strings.push(
      height/2 - 100 + i * 40
    );

  }

}

function draw() {

  background(20);


  // guitar body
  noStroke();

  fill(40);

  ellipse(width/2 - 100, height/2, 250, 300);

  ellipse(width/2 + 100, height/2, 250, 300);


  // guitar neck
  rect(width/2 + 100, height/2 - 40, 400, 80);


  // strings
  strokeWeight(3);

  for(let i = 0; i < strings.length; i++){

    let y = strings[i];

    
    // hover effect
    if(abs(mouseY - y) < 10){

      stroke(0, 200, 255);

    } else {

      stroke(255);

    }

    
    line(
      width/2 - 200,
      y,
      width/2 + 500,
      y
    );

  }


  // title
  noStroke();

  fill(255);

  textAlign(CENTER);

  textSize(24);

  text(
    "Interactive Electric Guitar",
    width/2,
    80
  );


  textSize(16);

  text(
    "Click the strings to play notes",
    width/2,
    110
  );

}


// mouse click
function mousePressed() {

  userStartAudio();

  
  // check each string
  for(let i = 0; i < strings.length; i++){

    let y = strings[i];

    
    // if mouse touches string
    if(abs(mouseY - y) < 10){

      // play note
      osc.freq(
        midiToFreq(notes[i])
      );

      osc.amp(0.5, 0.05);

      osc.amp(0, 0.5);

    }

  }

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 7
