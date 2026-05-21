function setup() {

    createCanvas(windowWidth, windowHeight);
    
    colorMode(HSB, 360, 100, 100, 100);

    background(0);

}

function draw() {

    
    background(0, 0, 0, 8);

    
    for (let i = 0; i < 5; i++) {

        let x = random(width);

        let y = random(height);

        let r = random(1, 8);

       
        let hue = random(220, 300);

        fill(hue, 80, 100);

        noStroke();

        circle(x, y, r);

    }

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}

// Original code source: Andy Simionato
