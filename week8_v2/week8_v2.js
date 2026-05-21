let heartbeat;
let analyzer;

function preload() {

  // heartbeat sound
  heartbeat = loadSound("data/heartbeat.mp3");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(0);


  // audio analyzer
  analyzer = new p5.Amplitude();

  analyzer.setInput(heartbeat);


  // required for browser audio
  getAudioContext().suspend();

}

function draw() {

  // fading background
  background(0, 20);


  // current volume
  let volume = analyzer.getLevel();


  // map volume to heart size
  let heartSize = map(
    volume,
    0,
    0.4,
    180,
    450
  );


  // glowing background pulse
  noStroke();

  fill(
    255,
    0,
    0,
    40
  );

  ellipse(
    width/2,
    height/2,
    heartSize + 150
  );


  // draw heart
  push();

  translate(
    width/2,
    height/2
  );

  scale(
    heartSize / 200
  );

  noStroke();

  fill(255, 0, 0);

  beginShape();

  vertex(0, 40);

  bezierVertex(
    -80,
    -60,
    -160,
    80,
    0,
    180
  );

  bezierVertex(
    160,
    80,
    80,
    -60,
    0,
    40
  );

  endShape(CLOSE);

  pop();


  // ECG style lines
  stroke(255, 0, 0);

  strokeWeight(2);

  noFill();

  beginShape();

  for(let x = 0; x < width; x += 20){

    let y = height * 0.8;

    let wave = sin(
      frameCount * 0.1 + x * 0.05
    ) * volume * 600;

    vertex(
      x,
      y + wave
    );

  }

  endShape();


  // title
  fill(255);

  noStroke();

  textAlign(CENTER);

  textSize(20);

  text(
    "Click to start heartbeat",
    width/2,
    80
  );

}


// click to start / pause
function mousePressed() {

  if(getAudioContext().state !== 'running'){

    userStartAudio();

  }


  if(heartbeat.isPlaying()){

    heartbeat.pause();

  } else {

    heartbeat.loop();

  }

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 8
