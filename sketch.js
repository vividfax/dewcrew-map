let overworld;
let nether;
let overworldPins = [];
let netherPins = [];

let grass;
let netherack;

let font;

let realm = true;

function preload() {

    overworld = loadJSON("overworld.json");
    nether = loadJSON("nether.json");

    grass = loadImage("grass.jpg");
    netherack = loadImage("netherack.png");

    font = loadFont("mc.otf");
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    textFont(font);

    createPinpoints();
}

function  draw() {

    if (realm) {
        image(grass, 0, 0, width, width);
        background(255, 255, 255, 80);
        displayWorld(overworldPins);
        fill(50);
    } else {
        image(netherack, 0, 0, width, width);
        background(0, 0, 0, 120);
        displayWorld(netherPins);
        fill(205);
    }
    displayCoords();
}

function createPinpoints() {

    for (i in overworld.pinpoints) {

        let pinpoint = overworld.pinpoints[i];
        let img = loadImage("screenshots/" + pinpoint.path);

        overworldPins[i] = new Pinpoint(img, pinpoint.x, pinpoint.y);
    }
    for (i in nether.pinpoints) {

        let pinpoint = nether.pinpoints[i];
        let img = loadImage("screenshots/" + pinpoint.path);

        netherPins[i] = new Pinpoint(img, pinpoint.x, pinpoint.y);
    }
}

function displayWorld(pins) {

    for (i in pins) {

        pins[i].display();
    }
    for (i in pins) {

        if (pins[i].hover(mouseX, mouseY)) {
            pins[i].display(1708 * 5, 960 * 5);
        }
    }
}

function displayCoords() {

    let x = mouseX;
    let y = mouseY;

    x -= (width/2);
    x /= 0.05
    y -= (height/2);
    y /= 0.05;

    textSize(20);
    text(x + ", " + y, 20, 40);
}

function keyPressed() {

    realm = !realm;
}

function mousePressed() {

    realm = !realm;
}
