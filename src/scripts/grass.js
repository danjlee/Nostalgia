class Grass {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.grassHeight = 100;
        this.grassWidth = 200;
        this.x = x;
        this.y = y;
    }

    draw(){
        // debugger;
        const ctx = this.ctx;
        let img = new Image();
        img.src = "./src/assets/images/big-grass.png"

        ctx.drawImage(
            img, 
            0, 
            0, 
            200, 
            105, 
            this.x, 
            this.y, 
            this.grassHeight, 
            this.grassWidth
        );
        
        this.y += 0.5;
    }

    collide(player) {
        let grassLeft = this.x;
        let grassRight = this.x + this.grassWidth;
        let grassTop = this.y;
        let playerLeft = player.x;
        let playerRight = player.x + player.playerWidth;
        let playerBottom = player.y + player.playerHeight - 10;

        if (Math.abs(grassTop - playerBottom) < 5 && char.vel_y > 0) {
            if ((playerLeft >= grassLeft && playerLeft <= grassRight) || (playerRight >= grassLeft && playerRight <= grassRight)) {
                return true;
            }
        }
    }
}

export default Grass;