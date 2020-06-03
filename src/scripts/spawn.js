import Grass from './grass';
import Point from './point';
import Player from './bunny';

class Spawn {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
    }
    
    draw() {
        const ctx = this.ctx;
        
        let newGrassArray = [];
        let grassArray = [];

        for (let y = 0; y < canvas.height * 2; y += 30) {
            for (let i = 0; i < 4; i++) {
                let x = Math.random(i, y) * canvas.width;
                if (Math.random() < 0.3) {
                    grassArray.push(new Grass(ctx, x, y))
                }
            }
        }

        let point = new Point(ctx);
        let bunny = new Player(ctx, canvas);

        point.points += 1;
        point.pointCounter();

        let counter = Math.floor(point.points / 100);

        for (let i = 0; i < grassArray.length; i++) {
            grassArray[i].draw();
            if (grassArray[i].collide(bunny)) {
                bunny.vely = 0;
                bunny.position.y = grassyArray[i].y;
                bunny.jump = false;
            }
        }

        if (counter < 200) {
            if (Math.random() < 0.025) {
                for (let i = 0; i < 9; i++) {
                    var x = Math.random(i) * canvas.width;
                }
                let y = 0;
                newGrassArray.push(new Grass(ctx, x, y));
            }
        }

        newGrassArray.forEach(grass => {
            grass.draw();
            if (grass.collide(bunny)) {
                bunny.vely = 0;
                bunny.position.y = grass.y;
                bunny.jump = false;
            }

            if (counter < 200) {
                grass.y += 0.2;
            }
        });

        newGrassArray = newGrassArray.filter(grass => grass.y < canvas.height);

    }
}

export default Spawn;