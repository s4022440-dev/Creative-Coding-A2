function setup() {

    createCanvas(windowWidth, windowHeight);

    // HSB color mode
    colorMode(HSB, 360, 100, 100, 100);

    background(0);

}

function draw() {

    // fading background
    background(0, 0, 0, 8);

    // multiple stars
    for (let i = 0; i < 5; i++) {

        // stars follow mouse area
        let x = mouseX + random(-150, 150);

        let y = mouseY + random(-150, 150);

        let r = random(1, 8);

        // blue-purple colors
        let hue = random(220, 300);

        fill(hue, 80, 100);

        noStroke();

        circle(x, y, r);

    }

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 6
