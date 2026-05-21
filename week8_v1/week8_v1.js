let osc;

// white key notes
let notes = [
  60, 62, 64, 65,
  67, 69, 71, 72
];

// white keys
let whiteKeys = [];

// black keys
let blackKeys = [];

// pressed animation
let pressedWhite = -1;
let pressedBlack = -1;

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

  // sound oscillator
  osc = new p5.TriOsc();

  osc.start();

  osc.amp(0);


  // create white keys
  for(let i = 0; i < 8; i++){

    whiteKeys.push({

      x: -350 + i * 100,

      w: 90

    });

  }


  // black keys
  blackKeys = [

    { x:-300, note:61 },
    { x:-200, note:63 },

    { x:0, note:66 },
    { x:100, note:68 },
    { x:200, note:70 }

  ];

}

function draw() {

  background(180, 190, 210);


  // ---------- LIGHTING ----------
  ambientLight(255);

  directionalLight(
    255,
    255,
    255,
    0,
    1,
    -1
  );


  // ---------- CAMERA ----------
  rotateX(-0.25);

  rotateY(
    sin(frameCount * 0.01) * 0.02
  );


  // ---------- FLOOR ----------
  push();

  translate(0, 260, 0);

  rotateX(HALF_PI);

  noStroke();

  fill(160);

  plane(4000, 4000);

  pop();


  // ---------- PIANO BODY ----------
  push();

  translate(0, 120, 0);

  noStroke();

  fill(40);

  box(
    1050,
    180,
    520
  );

  pop();


  // ---------- WHITE KEYS ----------
  for(let i = 0; i < whiteKeys.length; i++){

    let k = whiteKeys[i];

    push();

    translate(
      k.x,
      20,
      20
    );


    // pressed animation
    if(i === pressedWhite){

      translate(0, 8, 0);

      fill(120, 220, 255);

    } else {

      fill(255);

    }

    stroke(180);

    strokeWeight(1);

    box(
      k.w,
      50,
      320
    );

    pop();

  }


  // ---------- BLACK KEYS ----------
  for(let i = 0; i < blackKeys.length; i++){

    let b = blackKeys[i];

    push();

    translate(
      b.x,
      -40,
      -60
    );


    // pressed animation
    if(i === pressedBlack){

      translate(0, 8, 0);

      fill(80, 180, 255);

    } else {

      fill(30);

    }

    noStroke();

    box(
      55,
      90,
      180
    );

    pop();

  }


  // ---------- FRONT EDGE ----------
  push();

  translate(0, -20, -240);

  fill(20);

  box(
    1050,
    30,
    40
  );

  pop();


  // ---------- TITLE ----------
  push();

  resetMatrix();

  fill(20);

  textAlign(CENTER);

  textSize(28);

  text(
    "3D CYBER PIANO",
    width/2,
    60
  );

  textSize(16);

  text(
    "Click the keys to play",
    width/2,
    90
  );

  pop();

}


// ---------- MOUSE CLICK ----------
function mousePressed(){

  userStartAudio();

  let mx = mouseX - width/2;

  let my = mouseY - height/2;


  // white keys
  for(let i = 0; i < whiteKeys.length; i++){

    let k = whiteKeys[i];

    if(

      mx > k.x - 45 &&
      mx < k.x + 45 &&

      my > -40 &&
      my < 180

    ){

      playWhite(i);

    }

  }


  // black keys
  for(let i = 0; i < blackKeys.length; i++){

    let b = blackKeys[i];

    if(

      mx > b.x - 30 &&
      mx < b.x + 30 &&

      my > -120 &&
      my < 40

    ){

      playBlack(i);

    }

  }

}


// ---------- PLAY WHITE ----------
function playWhite(i){

  pressedWhite = i;

  osc.freq(
    midiToFreq(notes[i])
  );

  osc.fade(0.5, 0.05);

  osc.fade(0, 0.5);


  setTimeout(() => {

    pressedWhite = -1;

  }, 150);

}


// ---------- PLAY BLACK ----------
function playBlack(i){

  pressedBlack = i;

  osc.freq(
    midiToFreq(blackKeys[i].note)
  );

  osc.fade(0.5, 0.05);

  osc.fade(0, 0.5);


  setTimeout(() => {

    pressedBlack = -1;

  }, 150);

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

// Original sketch by Andy Simionato,
// Modified for Creative Coding Week 7
