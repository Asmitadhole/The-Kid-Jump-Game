score = 0;
cross = true;

document.onkeydown = function (e) {
    console.log("Key code is: ", e.code);
    if (e.code === "ArrowUp") {
        Player = document.querySelector('.Player');
        Player.classList.add('animatePlayer');
        setTimeout(() => {
            Player.classList.remove('animatePlayer');
        }, 700);
    }
    if (e.code === "ArrowRight") {
        console.log("Right");
        Player = document.querySelector('.Player');
        PlayerX = parseInt(window.getComputedStyle(Player, null).getPropertyValue('left'));
        Player.style.left = PlayerX + 112 + "px";
    }
    else if (e.code === "ArrowLeft") {
        console.log("Left");
        Player = document.querySelector('.Player');
        PlayerX = parseInt(window.getComputedStyle(Player, null).getPropertyValue('left'));
        Player.style.left = (PlayerX - 112) + "px";
    }
}
setInterval(() => {
    Player = document.querySelector('.Player');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    px = parseInt(window.getComputedStyle(Player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(Player, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(px - ox);
    offsetY = Math.abs(py - oy);

    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur);
        }, 500);
    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}