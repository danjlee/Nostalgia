import "./styles/index.scss"
import Player from './bunny';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    const mainScreen = document.getElementById("main-screen");
    const startButton = document.getElementById("start-button");
    const music = document.getElementById("music");

    let player = new Player(ctx, canvas);
    let game = new Game(ctx, canvas, player);
    window.requestAnimationFrame(game.render);

    window.onkeydown = function (e) {
      return !(e.keyCode == 32 && e.target == document.body);
    }; 

    const play = () => {
        game.start = true;
        player.moveable = 1;
        game.render();
        if (game.sound === true) {
            music.play();
            music.volume = 0.2;
        }
    }

    startButton.addEventListener("click", () => {
        mainScreen.setAttribute("style", "visibility: hidden;");
        startButton.setAttribute("style", "visibility: hidden;");
        play();
    })

});
