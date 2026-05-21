let song;

let analyzer;

let notes = [];

let lanes = [];

let hitY;

let score = 0;

let combo = 0;

let feedback = "";

let feedbackTimer = 0;

let hitEffects = [];

let flashAlpha = 0;


// ---------- AUTO CHART ----------
let chart = [];

let bpm = 120;

// half-beat timing
let beatInterval = 60 / bpm / 2;


function preload(){

  // your music
  song = loadSound("data/music.mp3");

}


function setup(){

  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);

  textAlign(CENTER);

  hitY = height - 140;

  getAudioContext().suspend();


  // analyzer
  analyzer = new p5.Amplitude();

  analyzer.setInput(song);


  // lanes
  lanes = [

    width * 0.2,
    width * 0.4,
    width * 0.6,
    width * 0.8

  ];


  // ---------- AUTO GENERATE CHART ----------
  for(let t = 2; t < 60; t += beatInterval){

    chart.push({

      time: t,

      lane: floor(random(4))

    });

  }


  // ---------- CREATE NOTES ----------
  for(let i = 0; i < chart.length; i++){

    let c = chart[i];

    notes.push({

      lane: c.lane,

      x: lanes[c.lane],

      y: 0,

      hit: false,

      time: c.time

    });

  }

}


function draw(){


  // ---------- AUDIO REACTION ----------
  let volume = analyzer.getLevel();


  // reactive background
  background(

    10 + volume * 120,
    10,
    30 + volume * 80

  );


  // ---------- TITLE ----------
  fill(255);

  textSize(28);

  text(
    "CYBER RHYTHM V5",
    width/2,
    60
  );


  // ---------- SCORE ----------
  textSize(20);

  text(
    "Score: " + score,
    width/2,
    100
  );


  // ---------- COMBO ----------
  push();

  translate(width/2,160);

  scale(1 + combo * 0.01);

  fill(180,0,255);

  textSize(36);

  text(
    combo + " COMBO",
    0,
    0
  );

  pop();


  // ---------- LANES ----------
  for(let i = 0; i < lanes.length; i++){

    let glow = volume * 255;

    stroke(
      120,
      glow,
      255
    );

    strokeWeight(6);

    line(
      lanes[i],
      0,
      lanes[i],
      height
    );

  }


  // ---------- HIT LINE ----------
  stroke(180,0,255);

  strokeWeight(12);

  line(
    width * 0.1,
    hitY,
    width * 0.9,
    hitY
  );


  // ---------- NOTES ----------
  for(let i = 0; i < notes.length; i++){

    let n = notes[i];


    // current song time
    let current = song.currentTime();


    // travel speed
    let travelTime = 1.2;


    // timing progress
    let progress = map(

      current,

      n.time - travelTime,
      n.time,

      0,
      1

    );


    // calculate note position
    n.y = lerp(
      -100,
      hitY,
      progress
    );


    // draw notes
    if(

      !n.hit &&
      progress > 0 &&
      progress < 1.3

    ){

      noStroke();

      fill(

        180 + sin(frameCount * 0.05 + i) * 80,

        100,

        255

      );

      rect(

        n.x,
        n.y,

        90,
        32,

        12

      );

    }


    // MISS
    if(

      current > n.time + 0.3 &&
      !n.hit

    ){

      n.hit = true;

      combo = 0;

      feedback = "MISS";

      feedbackTimer = 30;

    }

  }


  // ---------- HIT EFFECTS ----------
  for(let i = hitEffects.length - 1; i >= 0; i--){

    let h = hitEffects[i];

    h.alpha -= 5;

    noStroke();

    fill(

      180,
      100,
      255,

      h.alpha

    );

    ellipse(

      h.x,
      h.y,

      h.size

    );

    h.size += 12;


    if(h.alpha <= 0){

      hitEffects.splice(i,1);

    }

  }


  // ---------- FEEDBACK ----------
  if(feedbackTimer > 0){

    feedbackTimer--;

    textSize(54);


    if(feedback === "PERFECT"){

      fill(0,255,255);

    }


    if(feedback === "GOOD"){

      fill(255,255,0);

    }


    if(feedback === "MISS"){

      fill(255,80,80);

    }


    text(

      feedback,

      width/2,
      hitY - 90

    );

  }


  // ---------- SCREEN FLASH ----------
  if(flashAlpha > 0){

    flashAlpha -= 10;

    noStroke();

    fill(

      255,

      flashAlpha

    );

    rect(

      width/2,
      height/2,

      width,
      height

    );

  }


  // ---------- KEY LABELS ----------
  fill(180);

  textSize(28);

  text("A", lanes[0], hitY + 60);

  text("S", lanes[1], hitY + 60);

  text("K", lanes[2], hitY + 60);

  text("L", lanes[3], hitY + 60);

}


// ---------- KEYBOARD ----------
function keyPressed(){


  // unlock audio
  if(getAudioContext().state !== "running"){

    userStartAudio();

  }


  // start music
  if(!song.isPlaying()){

    song.play();

  }


  // lane mapping
  let lane = -1;


  if(key === 'a' || key === 'A'){

    lane = 0;

  }


  if(key === 's' || key === 'S'){

    lane = 1;

  }


  if(key === 'k' || key === 'K'){

    lane = 2;

  }


  if(key === 'l' || key === 'L'){

    lane = 3;

  }


  // ---------- FIND CLOSEST NOTE ----------
  let closestNote = null;

  let closestDistance = 999;


  // find nearest note
  for(let i = 0; i < notes.length; i++){

    let n = notes[i];

    let current = song.currentTime();

    let d = abs(current - n.time);


    if(

      n.lane === lane &&
      !n.hit &&
      d < closestDistance

    ){

      closestDistance = d;

      closestNote = n;

    }

  }


  // ---------- JUDGE ----------
  if(closestNote != null){

    // PERFECT
    if(closestDistance < 0.12){

      hitNote(
        closestNote,
        100,
        "PERFECT"
      );

    }

    // GOOD
    else if(closestDistance < 0.22){

      hitNote(
        closestNote,
        50,
        "GOOD"
      );

    }

  }

}


// ---------- HIT NOTE ----------
function hitNote(note,points,type){

  note.hit = true;

  score += points;

  combo++;

  feedback = type;

  feedbackTimer = 30;

  flashAlpha = 120;

  createHitEffect(note.x);

  playHitSound();

}


// ---------- HIT EFFECT ----------
function createHitEffect(x){

  hitEffects.push({

    x: x,

    y: hitY,

    alpha: 255,

    size: 20

  });

}


// ---------- HIT SOUND ----------
function playHitSound(){

  let osc = new p5.Oscillator('triangle');

  osc.start();

  osc.freq(

    random(500,1000)

  );

  osc.amp(0.3,0.01);

  osc.amp(0,0.2);

  setTimeout(() => {

    osc.stop();

  },200);

}


function windowResized(){

  resizeCanvas(

    windowWidth,
    windowHeight

  );

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 8
