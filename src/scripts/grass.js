class Grass {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.grassHeight = 52;
        this.grassWidth = 65;

        this.x = x;
        this.y = y;

        this.draw = this.draw.bind(this);
    }

    draw() {

        const ctx = this.ctx;

        let grass = new Image();
        grass.src = "./src/assets/images/grass.png"

        ctx.drawImage(
            grass, 
            0, 
            0, 
            65, 
            52, 
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