class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(floor(width / 2), floor(height / 2));
        this.xdir = 1; // Start moving to the right by default
        this.ydir = 0;
        this.len = 0;
    }

    setDirection(x, y) {
        // Prevent the snake from moving backwards
        if (this.xdir !== -x && this.ydir !== -y) {
            this.xdir = x;
            this.ydir = y;
        }
    }

    update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdir * scl;
        head.y += this.ydir * scl;
        this.body.push(head);

        // Wrap around the edges
        if (head.x > width - scl) head.x = 0;
        if (head.x < 0) head.x = width - scl;
        if (head.y > height - scl) head.y = 0;
        if (head.y < 0) head.y = height - scl;

        // Check for self-collision
        for (let i = 0; i < this.body.length - 1; i++) {
            let part = this.body[i];
            if (head.x === part.x && head.y === part.y) {
                gameOver();
            }
        }
    }

    grow() {
        let head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);
    }

    eat(pos) {
        let head = this.body[this.body.length - 1];
        if (head.x === pos.x && head.y === pos.y) {
            this.grow();
            return true;
        }
        return false;
    }

    show() {
        for (let i = 0; i < this.body.length - 1; i++) {
            fill(0, 255, 0); // Body color
            noStroke();
            rect(this.body[i].x, this.body[i].y, scl, scl);
        }
        fill(255); // Head color (white)
        rect(this.body[this.body.length - 1].x, this.body[this.body.length - 1].y, scl, scl);
    }
}
