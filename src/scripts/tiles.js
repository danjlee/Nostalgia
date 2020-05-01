// class Tile {
//     constructor(ctx, canvas) {
//         this.ctx = ctx;
//         this.ctx = canvas

//         this.grassWidth = 50;
//         this.grassHeight = 50;

//         this.bigGrassWidth = 100;
//         this.bigGrassHeight = 50;

//         this.grass = new Image();
//         this.grass.src = "./assets/images/grass.png"
//         this.bigGrass = new Image();
//         this.bigGrass.src = "./assets/images/big-grass.png"

//         this.tiles = [
//             {
//                 grass: this.grass.src
//             },
//             {
//                 bigGrass: this.bigGrass.src
//             }
//         ]

//         this.tilePlace = [
//             this.randTiles(200),
//             this.randTiles(300),
//             this.randTiles(400),
//             this.randTiles(500),
//             this.randTiles(600),
//             this.randTiles(700)
//         ]

//     }

//     randTiles(y) {
//         const left = Object.assign({}, this.tiles[Math.floor(Math.random() * 2)]);
//         const right = Object.assign({}, this.tiles[Math.floor(Math.random() * 2)]);

//         left.x = Math.floor(Math.random() * (240 - left.w + 1));
//         right.x = Math.floor(Math.random() * (480 - right.w - 240 + 1)) + 240;

//         left.y = y;
//         right.y = y;

//         return [left, right];
//     }

//     eachTiles(c) {
//         this.tilePlace.forEach(c.bind(this));
//     }

//     tileMove() {
//         this.eachTiles(function (tile) {
//             tile[0].y += 1.5;
//             tile[1].y += 1.5;

//             const newTile = this.randTiles(200);

//             if (tile[0].y >= 800) {
//                 tile.shift();
//                 tile.unshift(newTile[0]);
//             }

//             if (tile[1].y >= 800) {
//                 tile.shift();
//                 tile.unshift(newTile[1]);
//             }
//         });
//     }

//     tileDraw() {
//         const ctx = this.ctx

//         let grass = new Image();
//         grass.src = "./assets/images/grass.png"
//         let bigGrass = new Image();
//         bigGrass.src = "./assets/images/big-grass.png"

//         this.eachTiles(function (tile) {
//             debugger;
//             ctx.drawImage(grass, tile[0].x, tile[0].y, tile[0].grassWidth, tile[0].grassHeight);
            
//             ctx.drawImage(bigGrass, tile[1].x, tile[1].y, tile[1].bigGrassWidth, tile[1].bigGrassHeight);
//         })
//     }

// }

// export default Tile;