let stars = [];

function setup() {

    createCanvas(windowWidth, windowHeight);

    // HSB color mode
    colorMode(HSB, 360, 100, 100, 100);

    background(0);

}

function draw() {

    // long fading trails
    background(0, 0, 0, 5);

    // create stars around mouse
    for (let i = 0; i < 5; i++) {

        let star = {

            // noise movement
            x: mouseX + random(-200, 200),

            y: mouseY + random(-200, 200),

            r: random(1, 10),

            hue: random(220, 300),

            offset: random(1000)

        };

        stars.push(star);

    }


    // limit star amount
    if(stars.length > 300){

        stars.splice(0,5);

    }


    // constellation lines
    stroke(255, 20);

    for (let i = 0; i < stars.length - 1; i++) {

        let s1 = stars[i];

        let s2 = stars[i + 1];

        line(
            s1.x,
            s1.y,
            s2.x,
            s2.y
        );

    }


    // draw moving stars
    noStroke();

    for (let i = 0; i < stars.length; i++) {

        let s = stars[i];

        // noise wave motion
        let nx = s.x + noise(frameCount * 0.01 + s.offset) * 30;

        let ny = s.y + noise(frameCount * 0.01 + s.offset + 100) * 30;

        fill(s.hue, 80, 100);

        circle(
            nx,
            ny,
            s.r
        );

    }


    // center glow
    noStroke();

    fill(260, 40, 100, 10);

    circle(
        mouseX,
        mouseY,
        300
    );

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 6
