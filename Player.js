var register = {};

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = new Sprite(trainerImg, 4, 15, 64, 64);
  }

  draw() {
    this.sprite.show(this.x, this.y);
  }

  move() {
    let xvel = 0;
    let yvel = 0;

    if (register[LEFT_ARROW]) {
      xvel = -4;
      this.sprite.anim = 1;
    }
    if (register[RIGHT_ARROW]) {
      xvel = 4;
      this.sprite.anim = 2;
    }
    if (register[DOWN_ARROW]) {
      yvel = 4;
      this.sprite.anim = 0;
    }
    if (register[UP_ARROW]) {
      yvel = -4;
      this.sprite.anim = 3;
    }

    if (xvel == 0 && yvel == 0) {
      this.sprite.frameSpeed = 0;
      this.sprite.frame = 0;
    } else {
      this.sprite.frameSpeed = 10;
      this.x += xvel;
      this.y += yvel;
    }
  }

  update() {
    this.draw();
    this.move();
  }
}

function keyPressed() {
  register[keyCode] = true;
}

function keyReleased() {
  register[keyCode] = false;
}
