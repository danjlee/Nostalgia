import Grass from './grass';

class Game {
    constructor(ctx, canvas, player) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.start = false;
        this.sound = true;
        this.lowest = 0;
        this.platforms = [];

        this.player = player;
        this.grass = new Grass(ctx, canvas, Math.floor(Math.random() * 2));

        this.collide = this.collide.bind(this);
        this.render = this.render.bind(this);
    }

    render() {
        let player = this.player;
        let grass = this.grass;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.start === true) {
            player.draw();
            player.move();
            grass.draw();
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