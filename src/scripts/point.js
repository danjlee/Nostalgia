class Point {
    constructor(ctx) {
        this.ctx = ctx;
        this.points = 0;
    }

    pointCounter() {
        let point = Math.floor(this.points / 100);
        this.ctx.fillStyle = "white";
        this.ctx.font = "18px Arial";
        this.ctx.fillText("Points: " + point, 8, 20);
    }
}

export default Point;