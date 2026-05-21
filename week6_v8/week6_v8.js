let img;
let myFont;

let particles = [];

function preload() {

    // background image
    img = loadImage('data/background.jpg');

    // italic font
    myFont = loadFont('data/ACaslonPro-Italic.otf');

}

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    noStroke();

    textFont(myFont);

    colorMode(HSB, 360, 100, 100, 100);

}

function draw() {

    // softer fading background
    background(0, 0, 0, 8);


    // gentle image glitch
    let xOffset = 0;

    if(random() < 0.02){

        xOffset = random(-40, 40);

    }


    // background image
    image(
        img,
        xOffset,
        0,
        width,
        height
    );


    // dreamy purple flash
    if(random() < 0.01){

        fill(
            random(220, 300),
            random(50, 100),
            random(80, 100),
            20
        );

        rect(
            0,
            0,
            width,
            height
        );

    }


    // soft scanlines
    fill(0, 0, 0, 20);

    for(let y = 0; y < height; y += 8){

        rect(
            0,
            y,
            width,
            1
        );

    }


    // floating white stars
    noStroke();

    for(let i = 0; i < 30; i++){

        fill(0, 0, 100, random(20,60));

        circle(
            random(width),
            random(height),
            random(1,4)
        );

    }


    // particle fireworks
    for(let i = particles.length - 1; i >= 0; i--){

        let p = particles[i];

        // movement
        p.x += p.vx;

        p.y += p.vy;

        // fade
        p.alpha -= 1.5;

        // draw particle
        fill(
            p.hue,
            80,
            100,
            p.alpha
        );

        circle(
            p.x,
            p.y,
            p.size
        );

        // remove faded particles
        if(p.alpha <= 0){

            particles.splice(i,1);

        }

    }


    // dreamy glitch typography
    if(frameCount % 80 === 0){

        textAlign(CENTER, CENTER);

        textSize(120);


        // main text
        fill(280, 30, 100);

        text(
            "SIGNAL LOST",
            width/2,
            height/2
        );


        // cyan offset
        fill(180, 40, 100, 40);

        text(
            "SIGNAL LOST",
            width/2 + random(-6,6),
            height/2 + random(-6,6)
        );


        // pink offset
        fill(320, 30, 100, 30);

        text(
            "SIGNAL LOST",
            width/2 + random(-6,6),
            height/2 + random(-6,6)
        );

    }

}


// mouse click fireworks
function mousePressed(){

    // random explosion color
    let randomHue = random(0,360);

    for(let i = 0; i < 80; i++){

        particles.push({

            x: mouseX,

            y: mouseY,

            vx: random(-5,5),

            vy: random(-5,5),

            size: random(2,8),

            alpha: 100,

            hue: randomHue

        });

    }

}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}

// Image: https://au.pinterest.com/pin/918452917760560989/
// Original sketch by Karen ann Donnachie and Andy Simionato
// Modified for Creative Coding Week 6
