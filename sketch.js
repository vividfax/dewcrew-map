let json;
let pinpoints = [];
let back;

function preload() {
    json = loadJSON("pinpoints.json");
    back = loadImage("background.jpg");
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    createPinpoints();
}

function  draw() {

    image(back, 0, 0, width, width);
    background(255, 255, 255, 80);

    displayPinpoints();
}

function createPinpoints() {

    for (i in json.pinpoints) {

        let pinpoint = json.pinpoints[i];
        let img = loadImage("screenshots/" + pinpoint.path);

        pinpoints[i] = new Pinpoint(img, pinpoint.x, pinpoint.y);
    }
}

function displayPinpoints() {

    for (i in pinpoints) {

        pinpoints[i].display();
    }
    for (i in pinpoints) {

        if (pinpoints[i].hover(mouseX, mouseY)) {
            pinpoints[i].display(1708 * 5, 960 * 5);
        }
    }
}
