let img;
let myFont;

function preload() {

    img = loadImage('data/background.jpg');

    myFont = loadFont('data/ACaslonPro-Italic.otf');

}

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    noStroke();

    textFont(myFont);

}

function draw() {

    background(0, 25);

    let xOffset = 0;

    if(random() < 0.03){

        xOffset = random(-80, 80);

    }


    image(
        img,
        xOffset,
        0,
        width,
        height
    );

    if(random() < 0.02){

        fill(
            random(180, 280),
            random(50, 100),
            random(100, 255),
            80
        );

        rect(
            0,
            0,
            width,
            height
        );

    }


    // scanlines
    fill(0, 100);

    for(let y = 0; y < height; y += 6){

        rect(
            0,
            y,
            width,
            2
        );

    }


    // digital noise
    for(let i = 0; i < 150; i++){

        fill(
            random(180, 300),
            random(50, 255),
            random(100, 255),
            random(20, 80)
        );

        rect(
            random(width),
            random(height),
            random(1, 5),
            random(1, 5)
        );

    }


    // glitch typography
    if(frameCount % 80 === 0){

        textAlign(CENTER, CENTER);

        textSize(120);


        // purple main text
        fill(180, 100, 255);

        text(
            "SIGNAL LOST",
            width/2,
            height/2
        );


        // cyan glitch layer
        fill(0, 255, 255, 120);

        text(
            "SIGNAL LOST",
            width/2 + random(-10,10),
            height/2 + random(-10,10)
        );


        // pink glitch layer
        fill(255, 0, 180, 120);

        text(
            "SIGNAL LOST",
            width/2 + random(-10,10),
            height/2 + random(-10,10)
        );

    }

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Karen ann Donnachie and Andy Simionato
// Modified for Creative Coding Week 6
