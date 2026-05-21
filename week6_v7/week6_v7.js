let img;
let myFont;

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

}

function draw() {

    // softer fading background
    background(0, 8);


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
            random(150, 255),
            40
        );

        rect(
            0,
            0,
            width,
            height
        );

    }


    // soft scanlines
    fill(0, 50);

    for(let y = 0; y < height; y += 8){

        rect(
            0,
            y,
            width,
            1
        );

    }


    // floating digital particles
    for(let i = 0; i < 120; i++){

        fill(
            random(220, 300),
            random(50, 150),
            255,
            random(10, 40)
        );

        circle(
            random(width),
            random(height),
            random(1, 4)
        );

    }


    // constellation lines
    stroke(180, 100, 255, 20);

    for(let i = 0; i < 8; i++){

        line(
            random(width),
            random(height),
            random(width),
            random(height)
        );

    }


    // random white stars
    noStroke();

    for(let i = 0; i < 40; i++){

        let x = random(width);

        let y = random(height);

        let r = random(2, 8);

        fill(
            255,
            random(80,150)
        );

        circle(
            x,
            y,
            r
        );

    }


    // dreamy glitch typography
    if(frameCount % 80 === 0){

        textAlign(CENTER, CENTER);

        textSize(120);


        // main text
        fill(210, 180, 255);

        text(
            "SIGNAL LOST",
            width/2,
            height/2
        );


        // cyan offset
        fill(150, 255, 255, 60);

        text(
            "SIGNAL LOST",
            width/2 + random(-6,6),
            height/2 + random(-6,6)
        );


        // pink offset
        fill(255, 180, 255, 50);

        text(
            "SIGNAL LOST",
            width/2 + random(-6,6),
            height/2 + random(-6,6)
        );

    }

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}

// Image: https://au.pinterest.com/pin/918452917760560989/
// Original sketch by Karen ann Donnachie and Andy Simionato
// Modified for Creative Coding Week 6
