function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
}

function draw() {
  
  background(20);

  stroke(0);           
  strokeWeight(10);    
  fill(mouseX/5,0,255);    

  square(400,300,200);
  
  push();
  fill(255);
  noStroke();
  textSize(18);

  text("CREATIVE CODING", 180, 80);
  text("WEEK 2", width - 150, height - 60);

  pop();
  
  stroke(255);

  line(100, 100, width - 100, 100);
  line(100, height - 150, width - 100, height - 150);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
