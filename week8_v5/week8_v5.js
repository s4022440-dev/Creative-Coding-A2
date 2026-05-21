let song;

let osc;

let notes = [];

let lanes = [];

let hitY;

let score = 0;

function preload(){

  // your music
  song = loadSound("data/music.mp3");

}

function setup(){

  createCanvas(windowWidth, windowHeight);

  hitY = height - 140;

  rectMode(CENTER);

  textAlign(CENTER);

  getAudioContext().suspend();


  // lane positions
  lanes = [

    width * 0.2,
    width * 0.4,
    width * 0.6,
    width * 0.8

  ];


  // generate notes
  for(let i = 0; i < 80; i++){

    let lane = floor(random(4));

    notes.push({

      lane: lane,

      x: lanes[lane],

      y: -i * 180,

      speed: 5,

      hit: false

    });

  }


  // hit sound
  osc = new p5.Oscillator('triangle');

  osc.start();

  osc.amp(0);

}

function draw(){

  background(10);


  // title
  fill(255);

  textSize(26);

  text(
    "CYBER RHYTHM V2",
    width/2,
    60
  );


  // score
  textSize(18);

  text(
    "Score: " + score,
    width/2,
    100
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


  // hit line
  stroke(180,0,255);

  strokeWeight(8);

  line(
    width * 0.1,
    hitY,
    width * 0.9,
    hitY
  );


  // notes
  for(let i = 0; i < notes.length; i++){

    let n = notes[i];


    // move notes only when music is playing
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
    if(n.y > height){

      n.hit = true;

    }

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

    if(

      n.lane === lane &&
      abs(n.y - hitY) < 50 &&
      !n.hit

    ){

      n.hit = true;

      score++;


      // hit sound
      osc.freq(
        random(400,800)
      );

      osc.amp(0.3, 0.01);

      osc.amp(0, 0.2);

    }

  }

}


function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 8
