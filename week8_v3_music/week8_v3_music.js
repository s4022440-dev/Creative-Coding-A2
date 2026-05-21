let song;
let analyzer;

let particles = [];

function preload() {

  // your psychedelic music
  song = loadSound("data/music.mp3");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  colorMode(HSB, 360, 100, 100, 100);

  noStroke();


  // audio analyzer
  analyzer = new p5.Amplitude();

  analyzer.setInput(song);


  // required for browser audio
  getAudioContext().suspend();

}

function draw() {

  // audio volume
  let volume = analyzer.getLevel();


  // dreamy fading background
  background(
    260 + sin(frameCount * 0.01) * 40,
    60,
    10,
    12
  );


  // center glow
  fill(
    map(volume, 0, 0.5, 180, 320),
    80,
    100,
    20
  );

  ellipse(
    width/2,
    height/2,
    map(volume, 0, 0.5, 200, 900)
  );


  // create particles
  if(frameCount % 2 === 0){

    particles.push({

      x: width/2,
      y: height/2,

      angle: random(TWO_PI),

      speed: random(1, 8),

      size: random(5, 30),

      hue: random(360),

      alpha: 100

    });

  }


  // draw psychedelic particles
  for(let i = particles.length - 1; i >= 0; i--){

    let p = particles[i];


    // movement
    p.x += cos(p.angle) * p.speed;

    p.y += sin(p.angle) * p.speed;


    // spiral motion
    p.angle += 0.02;


    // fade
    p.alpha -= 1;


    // reactive size
    let s = p.size + volume * 200;


    fill(
      p.hue + frameCount,
      80,
      100,
      p.alpha
    );


    circle(
      p.x,
      p.y,
      s
    );


    // remove faded particles
    if(p.alpha <= 0){

      particles.splice(i,1);

    }

  }


  // reactive rings
  noFill();

  strokeWeight(3);

  for(let i = 0; i < 6; i++){

    stroke(
      (frameCount * 2 + i * 40) % 360,
      80,
      100,
      40
    );

    ellipse(
      width/2,
      height/2,
      200 + i * 120 + volume * 500
    );

  }


  // center pulse
  noStroke();

  fill(
    320,
    60,
    100,
    90
  );

  ellipse(
    width/2,
    height/2,
    map(volume, 0, 0.5, 40, 220)
  );


  // title
  fill(0, 0, 100);

  textAlign(CENTER);

  textSize(22);

  text(
    "CLICK TO START PSYCHEDELIC AUDIO",
    width/2,
    80
  );

}


// click to play / pause
function mousePressed() {

  if(getAudioContext().state !== 'running'){

    userStartAudio();

  }


  if(song.isPlaying()){

    song.pause();

  } else {

    song.loop();

  }

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Karen ann Donnachie & Andy Simionato
// Modified for Creative Coding Week 7
//Song: Vintage Elecro pop loop, by frankum(16,03,2017)
//https://freesound.org/people/frankum/sounds/384468/
