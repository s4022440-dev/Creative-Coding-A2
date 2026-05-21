let song;

let notes = [];

let hitY;

let score = 0;

function preload(){

  song = loadSound("data/music.mp3");

}

function setup(){

  createCanvas(windowWidth, windowHeight);

  hitY = height - 150;

  getAudioContext().suspend();


  // create notes
  for(let i = 0; i < 30; i++){

    notes.push({

      x: width/2,

      y: -i * 250,

      speed: 5,

      hit: false

    });

  }

}

function draw(){

  background(10);


  // title
  fill(255);

  textAlign(CENTER);

  textSize(24);

  text(
    "RHYTHM PROTOTYPE V1",
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


  // lane
  stroke(80);

  strokeWeight(4);

  line(
    width/2,
    0,
    width/2,
    height
  );


  // hit line
  stroke(180,0,255);

  strokeWeight(6);

  line(
    width/2 - 120,
    hitY,
    width/2 + 120,
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

      ellipse(
        n.x,
        n.y,
        50
      );

    }


    // miss
    if(n.y > height){

      n.hit = true;

    }

  }

}


// click to start
function mousePressed(){

  if(getAudioContext().state !== "running"){

    userStartAudio();

  }


  if(!song.isPlaying()){

    song.play();

  }


  // hit detection
  for(let i = 0; i < notes.length; i++){

    let n = notes[i];

    let d = dist(
      mouseX,
      mouseY,
      n.x,
      n.y
    );


    // click near note
    if(
      d < 50 &&
      abs(n.y - hitY) < 60 &&
      !n.hit
    ){

      n.hit = true;

      score++;

    }

  }

}


function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}
