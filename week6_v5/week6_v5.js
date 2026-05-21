let img;

function preload() {

    img = loadImage('data/background.jpg');

}

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    noStroke();

}

function draw() {

    background(0, 20);


    let xOffset = 0;

    if(random() < 0.02){

        xOffset = random(-50, 50);

    }


    image(
        img,
        xOffset,
        0,
        width,
        height
    );


    // scanlines
    fill(0, 80);

    for(let y = 0; y < height; y += 6){

        rect(
            0,
            y,
            width,
            2
        );

    }


    // random white noise
    for(let i = 0; i < 100; i++){

        fill(255, random(20,80));

        rect(
            random(width),
            random(height),
            random(1,4),
            random(1,4)
        );

    }

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}


// Original sketch by Karen ann Donnachie and Andy Simionato
// Modified for Creative Coding Week 6
