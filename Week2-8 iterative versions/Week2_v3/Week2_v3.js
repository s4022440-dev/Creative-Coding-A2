function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
}

function draw() {
  
  background(25, 50, 100);

  stroke(0);           
  strokeWeight(10);    
  fill(250, 100, 255);    

  square(400,300,200);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
