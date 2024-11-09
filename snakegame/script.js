let snake;
let food;
let scl = 20;
let score = 0;
let speed = 6;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas-container');
    frameRate(speed);
    snake = new Snake();
    pickLocation();

    document.getElementById('up').addEventListener('click', () => snake.setDirection(0, -1));
    document.getElementById('down').addEventListener('click', () => snake.setDirection(0, 1));
    document.getElementById('left').addEventListener('click', () => snake.setDirection(-1, 0));
    document.getElementById('right').addEventListener('click', () => snake.setDirection(1, 0));
    document.getElementById('restart').addEventListener('click', restartGame);
    document.getElementById('speed-up').addEventListener('click', speedUp);
    document.getElementById('speed-down').addEventListener('click', slowDown);
}

function pickLocation() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
    snake.update();
    snake.show();

    if (snake.eat(food)) {
        pickLocation();
        score++;
        document.getElementById('score').innerText = 'Score: ' + score;
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDirection(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDirection(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.setDirection(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDirection(1, 0);
    }
}

function gameOver() {
    document.getElementById('game-over').classList.remove('hidden');
    noLoop();
}

function restartGame() {
    document.getElementById('game-over').classList.add('hidden');
    snake = new Snake();
    pickLocation();
    score = 0;
    document.getElementById('score').innerText = 'Score: ' + score;
    loop();
}

function speedUp() {
    speed+=2;
    frameRate(speed);
}

function slowDown() {
    if (speed > 2) {
        speed-=2;
        frameRate(speed);
    }
}
