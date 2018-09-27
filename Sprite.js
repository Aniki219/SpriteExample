class Sprite {
  constructor(imageData, numFrames, frameSpeed, w, h, sw, sh) {
    this.img = imageData;
    this.numFrames = numFrames || 1;
    this.frameSpeed = frameSpeed || 30;
    this.sw = sw || 64;
    this.sh = sh || 64;
    this.w = w || 32;
    this.h = h || 32;

    this.frame = 0;
    this.anim = 0;
  }

  show(x, y) {
    let sx = this.frame * this.sw;
    let sy = this.anim * this.sh;

    image(this.img, x, y, this.w, this.h, sx, sy, this.sw, this.sh);
    this.animate();
  }

  animate() {
    if (frameCount % this.frameSpeed == 0) {
      this.frame++;
    }

    if (this.frame >= this.numFrames) {
      this.frame = 0;
    }
  }
}
