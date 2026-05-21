let song;

let notes = [];

let lanes = [];

let hitY;

let score = 0;

let combo = 0;

let feedback = "";

let feedbackTimer = 0;

let hitEffects = [];

function preload(){

  song = loadSound("data/music.mp3");

}

function setup(){

  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);

  textAlign(CENTER);

  hitY = height - 140;

  getAudioContext().suspend();


  // lane positions
  lanes = [

    width * 0.2,
    width * 0.4,
    width * 0.6,
    width * 0.8

  ];


  // generate notes
  for(let i = 0; i < 100; i++){

    let lane = floor(random(4));

    notes.push({

      lane: lane,

      x: lanes[lane],

      y: -i * 160,

      speed: 5,

      hit: false

    });

  }

}

function draw(){

  background(8,10,20);


  // title
  fill(255);

  textSize(26);

  text(
    "CYBER RHYTHM V3",
    width/2,
    60
  );


  // score
  textSize(20);

  text(
    "Score: " + score,
    width/2,
    100
  );


  // combo
  fill(180,0,255);

  textSize(36);

  text(
    combo + " COMBO",
    width/2,
    160
  );


  // lanes
  stroke(60);

  strokeWeight(4);

  for(let i = 0; i < lanes.length; i++){

    line(
      lanes[i],
      0,
      lanes[i],
      height
    );

  }


  // hit line glow
  stroke(180,0,255);

  strokeWeight(10);

  line(
    width * 0.1,
    hitY,
    width * 0.9,
    hitY
  );


  // notes
  for(let i = 0; i < notes.length; i++){

    let n = notes[i];


    if(song.isPlaying()){

      n.y += n.speed;

    }


    // draw note
    if(!n.hit){

      noStroke();

      fill(255);

      rect(
        n.x,
        n.y,
        80,
        30,
        10
      );

    }


    // miss
    if(n.y > height && !n.hit){

      n.hit = true;

      combo = 0;

      feedback = "MISS";

      feedbackTimer = 30;

    }

  }


  // hit effects
  for(let i = hitEffects.length - 1; i >= 0; i--){

    let h = hitEffects[i];

    h.alpha -= 5;

    noStroke();

    fill(
      180,
      0,
      255,
      h.alpha
    );

    ellipse(
      h.x,
      h.y,
      h.size
    );

    h.size += 8;


    if(h.alpha <= 0){

      hitEffects.splice(i,1);

    }

  }


  // feedback text
  if(feedbackTimer > 0){

    feedbackTimer--;

    textSize(48);

    if(feedback === "PERFECT"){

      fill(0,255,255);

    }

    if(feedback === "GOOD"){

      fill(255,255,0);

    }

    if(feedback === "MISS"){

      fill(255,0,0);

    }

    text(
      feedback,
      width/2,
      hitY - 80
    );

  }


  // key labels
  fill(180);

  textSize(28);

  text("A", lanes[0], hitY + 60);

  text("S", lanes[1], hitY + 60);

  text("K", lanes[2], hitY + 60);

  text("L", lanes[3], hitY + 60);

}


// keyboard controls
function keyPressed(){


  // start audio
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


  // hit detection
  for(let i = 0; i < notes.length; i++){

    let n = notes[i];

    let d = abs(n.y - hitY);


    if(

      n.lane === lane &&
      !n.hit

    ){

      // PERFECT
      if(d < 20){

        n.hit = true;

        score += 100;

        combo++;

        feedback = "PERFECT";

        feedbackTimer = 30;

        createHitEffect(n.x);

        playHitSound();

      }


      // GOOD
      else if(d < 50){

        n.hit = true;

        score += 50;

        combo++;

        feedback = "GOOD";

        feedbackTimer = 30;

        createHitEffect(n.x);

        playHitSound();

      }

    }

  }

}


// hit particles
function createHitEffect(x){

  hitEffects.push({

    x: x,

    y: hitY,

    alpha: 255,

    size: 20

  });

}


// hit sound
function playHitSound(){

  let osc = new p5.Oscillator('triangle');

  osc.start();

  osc.freq(
    random(400,800)
  );

  osc.amp(0.3, 0.01);

  osc.amp(0, 0.2);

  setTimeout(() => {

    osc.stop();

  }, 200);

}


function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Karen ann Donnachie & Andy Simionato
// Modified for Creative Coding Week 7
