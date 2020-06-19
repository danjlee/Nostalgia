class Grass {
    constructor(ctx, canvas, random) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.grassSrc = random < 1 ? "./src/assets/images/grass.png" : "./src/assets/images/big-grass.png";

        if (random === 0) {
            this.grassHeight = 52;
            this.grassWidth = 65;
        } else {
        this.grassHeight = 63;
        this.grassWidth = 149;
        };

        this.x = canvas.width / 2;
        this.y = 0;

        this.draw = this.draw.bind(this);
    }

    draw() {

        const ctx = this.ctx;

        let grass = new Image();
        grass.src = this.grassSrc;

        ctx.drawImage(
            grass, 
            0, 
            0, 
            this.grassWidth, 
            this.grassHeight, 
            this.x, 
            this.y, 
            this.grassWidth,
            this.grassHeight
        );

        this.y += 0.3;

    }

    collision(player) {

    }
}

export default Grass;