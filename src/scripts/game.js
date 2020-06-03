class Game {
    constructor(ctx, canvas, player) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.start = false;
        this.sound = true;

        this.player = player;

        this.collide = this.collide.bind(this);
        this.render = this.render.bind(this);
    }

    render () {
        let player = this.player;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.start === true) {
            player.draw();
            player.move();
        }
        window.requestAnimationFrame(this.render);
    }

    collide() {
        const mainScreen = document.getElementById("main-screen");
        mainScreen.setAttribute("style", "visibility: visible;");
        const startScreen = document.getElementById("start-screen");
        startScreen.setAttribute("style", "visibility: hidden;");
    }
}

export default Game;