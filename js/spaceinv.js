const canvas = document.querySelector(".gamearea");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
  constructor() {
    this.position = {
      x: canvas.width / 2 - 50,
      y: canvas.height / 2
    };
    this.velocity = {
      x: 0,
      y: 0
    };

    const image = new Image();
    image.src = "./images/pixilart-drawing.png";

    this.image = image;
    this.width = 100;
    this.height = 100;
  }
  draw() {
    //ctx.fillStyle = "red";
    //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

const player = new Player();

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw();
}

animate();
