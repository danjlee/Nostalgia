class Player {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.playerStatus = "idleRight";
    this.moveable = 0;

    this.playerWidth = 47;
    this.playerHeight = 49;
    this.position = {
      x: this.canvas.width / 2,
      y: this.canvas.height - 51,
    };

    this.leftPressed = false;
    this.rightPressed = false;
    this.velx = 0;
    this.vely = 0;
    this.jumpCount = 1
    this.jump = false;

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);

    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);

    this.draw = this.draw.bind(this);
  }
  
  keyDownHandler(e) {
    if (this.moveable === 1) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = true;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = true;
      } 
      
      if (e.keyCode === 32) {
        this.jump = true;
      }
    }
  }

  keyUpHandler(e) {
    if (this.moveable === 1) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = false;
        this.playerStatus = "idleRight";
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = false;
        this.playerStatus = "idleLeft";
      } 
    }
  }

  land() {
    var ground = this.canvas.height - this.playerHeight;

    if (this.position.y >= ground) {
      this.position.y = ground;
      this.jump = false;
      this.vely = 0;
      this.jumpCount = 1
      return true;
    }
    return false;
  }

  draw() {
    const ctx = this.ctx;

    let idleRight = new Image();
    idleRight.src = "./src/assets/images/idle-right.png";

    let idleLeft = new Image();
    idleLeft.src = "./src/assets/images/idle-left.png";

    let moveRight = new Image();
    moveRight.src = "./src/assets/images/move-right.png";

    let moveLeft = new Image();
    moveLeft.src = "./src/assets/images/move-left.png";


    if (this.playerStatus === "idleRight") {
      ctx.drawImage(
        idleRight,
        this.position.x,
        this.position.y,
        this.playerWidth,
        this.playerHeight
      );
    } else if (this.playerStatus === "idleLeft") {
      ctx.drawImage(
        idleLeft,
        this.position.x,
        this.position.y,
        this.playerWidth,
        this.playerHeight
      );
    } else if (this.playerStatus === "moveRight") {
      ctx.drawImage(
        moveRight,
        this.position.x,
        this.position.y,
        this.playerWidth,
        this.playerHeight
      );
    } else if (this.playerStatus === "moveLeft") {
      ctx.drawImage(
        moveLeft,
        this.position.x,
        this.position.y,
        this.playerWidth,
        this.playerHeight
      );
    } 
  }

  move() {
    const canvas = this.canvas;

    if (this.rightPressed && this.position.x < canvas.width - this.playerWidth) {
      this.playerStatus = "moveRight";
      this.position.x += 3.5;
    } else if (this.leftPressed && this.position.x > 0) {
      this.playerStatus = "moveLeft";
      this.position.x -= 3.5;
    } 
    
    if (this.jump === true && this.jumpCount === 1) {
      this.jumpCount -= 1;
      this.vely -= 18;
      this.jump = false;
    }

    
    this.vely += 0.7;
    this.position.x += this.velx;
    this.velx *= 0.9;
    this.position.y += this.vely;
    this.vely *= 0.9;

    this.land();

  }
}

export default Player;