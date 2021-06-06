class Pinpoint {

    constructor(img, x, y) {

        this.img = img;
        this.x = x;
        this.y = y;
        this.width = 1708;
        this.height = 960;
    }

    display(w, h) {

        w = w || this.width;
        h = h || this.height;

        push();
        imageMode(CENTER);
        translate(width/2, height/2);
        scale(0.03);
        image(this.img, this.x, this.y, w, h);
        pop();
    }

    hover(x, y) {

        x -= (width/2);
        x /= 0.03;
        y -= (height/2);
        y /= 0.03;

        let distance = dist(x, y, this.x, this.y);

        if (distance < 500) {
            return true;
        }
        return false;
    }
}
