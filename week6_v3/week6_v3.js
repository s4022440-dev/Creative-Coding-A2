let stars = [];

function setup() {

    createCanvas(windowWidth, windowHeight);

    // HSB color mode
    colorMode(HSB, 360, 100, 100, 100);

    background(0);

}

function draw() {

    // fading background
    background(0, 0, 0, 8);

    // create new stars around mouse
    for (let i = 0; i < 5; i++) {

        let star = {

            x: mouseX + random(-150, 150),

            y: mouseY + random(-150, 150),

            r: random(1, 8),

            hue: random(220, 300)

        };

        stars.push(star);

    }


    // draw constellation lines
    stroke(255, 30);

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


    // draw stars
    noStroke();

    for (let i = 0; i < stars.length; i++) {

        let s = stars[i];

        fill(s.hue, 80, 100);

        circle(
            s.x,
            s.y,
            s.r
        );

    }

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Andy Simionato
// Modified for Creative Coding Week 6
