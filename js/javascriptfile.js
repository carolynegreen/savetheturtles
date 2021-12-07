window.addEventListener("load", welcomeScreen);
let lives = 3;
let points = 0;

let gameIsPaused = false;
let gameHasEnded = false;

let durationOfGame = 60;
let deciseconds;

let bgmusic = document.querySelector("#bgmusic");
let goodsound = document.querySelector("#goodsound");
let badsound = document.querySelector("#badsound");
let clicksound = document.querySelector("#clicksound");
badsound.volume = 0.3;
goodsound.volume = 0.3;
clicksound.volume = 0.1;

function welcomeScreen() {
    console.log("welcome");
    clicksound.play();

    playBgMusic();
    reset();
    
    document.querySelector("#titlescreen").classList.remove("hidden");
    document.querySelector("#titlelogo").classList.remove("hidden");

    document.querySelector("#game").classList.add("hidden");
    document.querySelector("#story").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#pause_screen").classList.add("hidden");

    document.querySelector("#start_button").addEventListener("click", story);

    document.querySelector("#gamelose").classList.add("hidden");
    document.querySelector("#gameover").classList.add("hidden");
    document.querySelector("#levelcomplete").classList.add("hidden");

    document.querySelector("#jelly_container").classList.add("paused");
    document.querySelector("#jelly_container2").classList.add("paused");
    document.querySelector("#shrimp_container").classList.add("paused");
    document.querySelector("#shrimp_container2").classList.add("paused");
    document.querySelector("#seaweed_container").classList.add("paused");
    document.querySelector("#seaweed_container2").classList.add("paused");
    document.querySelector("#trashbag_container").classList.add("paused");
    document.querySelector("#netto_container").classList.add("paused");
    document.querySelector("#facemask_container").classList.add("paused");

    points = 0;
    document.querySelector("#points").textContent = points;

    lives = 3;

    gameIsPaused = false;
    gameHasEnded = false;
}

function story() {
    console.log("story");
    clicksound.play();


    document.querySelector("#titlelogo").classList.add("hidden");
    document.querySelector("#story").classList.remove("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#back").addEventListener("click", welcomeScreen);
    document.querySelector("#next").addEventListener("click", rules);
}

function rules() {
    console.log("rules");
    clicksound.play();

    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#story").classList.add("hidden");
    document.querySelector("#back2").addEventListener("click", story);
    document.querySelector("#play").addEventListener("click", startGame);
}

function startGame() {
    console.log("start game");
    clicksound.play();
    playBgMusic();

    document.querySelector("#game").classList.remove("hidden");
    document.querySelector("#titlescreen").classList.add("hidden");
    document.querySelector("#levelcomplete").classList.add("hidden");
    document.querySelector("#gamelose").classList.add("hidden");
    document.querySelector("#story").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#pause_screen").classList.add("hidden");
    
    document.querySelector("#timer").classList.remove("timer_still");
    document.querySelector("#timer").classList.add("timer");
    document.querySelector("#timer").addEventListener("animationend", gameOver);
    
    document.querySelector("#jelly_container").classList.remove("paused");
    document.querySelector("#jelly_container2").classList.remove("paused");
    document.querySelector("#shrimp_container").classList.remove("paused");
    document.querySelector("#shrimp_container2").classList.remove("paused");
    document.querySelector("#seaweed_container").classList.remove("paused");
    document.querySelector("#seaweed_container2").classList.remove("paused");
    document.querySelector("#trashbag_container").classList.remove("paused");
    document.querySelector("#netto_container").classList.remove("paused");
    document.querySelector("#facemask_container").classList.remove("paused");

    document.querySelector("#jelly").addEventListener("click", loseLife);
    document.querySelector("#jelly2").addEventListener("click", loseLife);
    document.querySelector("#shrimp").addEventListener("click", loseLife);
    document.querySelector("#shrimp2").addEventListener("click", loseLife);
    document.querySelector("#seaweed").addEventListener("click", loseLife);
    document.querySelector("#seaweed2").addEventListener("click", loseLife);

    document.querySelector("#trashbag").addEventListener("click", gainPoint);
    document.querySelector("#netto").addEventListener("click", gainPoint);
    document.querySelector("#facemask").addEventListener("click", gainPoint);

    document.querySelector("#pause").addEventListener("click", paused);

    document.querySelector("#jelly_container").classList.add("pos1");
    document.querySelector("#jelly_container").classList.add("move1");
    document.querySelector("#jelly_container").addEventListener("click", zoomout1);
    document.querySelector("#jelly_container2").classList.add("pos1a");
    document.querySelector("#jelly_container2").classList.add("move1a");
    document.querySelector("#jelly_container2").addEventListener("click", zoomout1a);
    document.querySelector("#shrimp_container").classList.add("pos2");
    document.querySelector("#shrimp_container").classList.add("move2");
    document.querySelector("#shrimp_container").addEventListener("click", zoomout2);
    document.querySelector("#shrimp_container2").classList.add("pos2a");
    document.querySelector("#shrimp_container2").classList.add("move2a");
    document.querySelector("#shrimp_container2").addEventListener("click", zoomout2a);
    document.querySelector("#seaweed_container").classList.add("pos3");
    document.querySelector("#seaweed_container").classList.add("move3");
    document.querySelector("#seaweed_container").addEventListener("click", zoomout3);
    document.querySelector("#seaweed_container2").classList.add("pos3a");
    document.querySelector("#seaweed_container2").classList.add("move3a");
    document.querySelector("#seaweed_container2").addEventListener("click", zoomout3a);
    document.querySelector("#trashbag_container").classList.add("pos4")
    document.querySelector("#trashbag_container").classList.add("move4");
    document.querySelector("#trashbag_container").addEventListener("click", zoomout4);
    document.querySelector("#netto_container").classList.add("pos5");
    document.querySelector("#netto_container").classList.add("move5");
    document.querySelector("#netto_container").addEventListener("click", zoomout5);
    document.querySelector("#facemask_container").classList.add("pos6");
    document.querySelector("#facemask_container").classList.add("move6");
    document.querySelector("#facemask_container").addEventListener("click", zoomout6);
}

function showTime() {
    console.log ("showtime");
    if (timeLeft > 0) {
        timeLeft--;
        console.log(timeLeft)
        
        startTimer();
    } else {
        gameOver();
    }
    
    if (points > 14) {
        levelComplete();
    }
}

function loseLife() {
    console.log(lives);

    document.querySelector("#life" + lives).classList.remove("turtlered");
    document.querySelector("#life" + lives).classList.add("turtleblack");
    lives--;

    if (lives < 1) {
        gameLose();
    }
}

function gainPoint() {
    points++;
    console.log(points);
    document.querySelector("#points").textContent = points;

    if (points > 14) {
        levelComplete();
    }
}

/*jelly*/
document.querySelector("#jelly_container").classList.add("pos1");
document.querySelector("#jelly_container").classList.add("move1");
document.querySelector("#jelly_container").addEventListener("click", zoomout1);

function zoomout1() {
    console.log("function zoomout1()");
    document.querySelector("#jelly").classList.add("zoomout");
    document.querySelector("#jelly_container").classList.add("stop");
    document.querySelector("#jelly_container").addEventListener("animationend", restart1);
    badsound.currentTime = 0;
    badsound.play();
}

function restart1() {
    console.log("function restart1()");
    document.querySelector("#jelly_container").classList.remove("stop");
    document.querySelector("#jelly_container").classList.remove("move1");
    document.querySelector("#jelly_container").classList.remove("pos1");
    document.querySelector("#jelly").classList.remove("zoomout");

    document.querySelector("#jelly_container").offsetHeight;
    document.querySelector("#jelly_container").classList.add("pos1");
    document.querySelector("#jelly_container").classList.add("move1");
    document.querySelector("#jelly").addEventListener("click", zoomout1);
}

/*jelly 2*/
document.querySelector("#jelly_container2").classList.add("pos1a");
document.querySelector("#jelly_container2").classList.add("move1a");
document.querySelector("#jelly_container2").addEventListener("click", zoomout1a);

function zoomout1a() {
    console.log("function zoomout1a()");
    document.querySelector("#jelly2").classList.add("zoomout");
    document.querySelector("#jelly_container2").classList.add("stop");
    document.querySelector("#jelly_container2").addEventListener("animationend", restart1a);
    badsound.currentTime = 0;
    badsound.play();    
}

function restart1a() {
    console.log("function restart1a()");
    document.querySelector("#jelly_container2").classList.remove("stop");
    document.querySelector("#jelly_container2").classList.remove("move1a");
    document.querySelector("#jelly_container2").classList.remove("pos1a");
    document.querySelector("#jelly2").classList.remove("zoomout");

    document.querySelector("#jelly_container2").offsetHeight;
    document.querySelector("#jelly_container2").classList.add("pos1a");
    document.querySelector("#jelly_container2").classList.add("move1a");
    document.querySelector("#jelly2").addEventListener("click", zoomout1a);
}

/*shrimp*/
document.querySelector("#shrimp_container").classList.add("pos2");
document.querySelector("#shrimp_container").classList.add("move2");
document.querySelector("#shrimp_container").addEventListener("click", zoomout2);

function zoomout2() {
    console.log("function zoomout2()");
    document.querySelector("#shrimp").classList.add("zoomout");
    document.querySelector("#shrimp_container").classList.add("stop");

    document.querySelector("#shrimp_container").addEventListener("animationend", restart2);
    badsound.currentTime = 0;
    badsound.play();    
}

function restart2() {
    console.log("function restart2()");
    document.querySelector("#shrimp_container").classList.remove("stop");
    document.querySelector("#shrimp_container").classList.remove("move2");
    document.querySelector("#shrimp_container").classList.remove("pos2");
    document.querySelector("#shrimp").classList.remove("zoomout");

    document.querySelector("#shrimp_container").offsetHeight;
    document.querySelector("#shrimp_container").classList.add("pos2");
    document.querySelector("#shrimp_container").classList.add("move2");
    document.querySelector("#shrimp").addEventListener("click", zoomout2);
}

/*shrimp 2*/
document.querySelector("#shrimp_container2").classList.add("pos2a");
document.querySelector("#shrimp_container2").classList.add("move2a");
document.querySelector("#shrimp_container2").addEventListener("click", zoomout2a);

function zoomout2a() {
    console.log("function zoomout2a()");
    document.querySelector("#shrimp2").classList.add("zoomout");
    document.querySelector("#shrimp_container2").classList.add("stop");

    document.querySelector("#shrimp_container2").addEventListener("animationend", restart2a);
    badsound.currentTime = 0;
    badsound.play();    
}

function restart2a() {
    console.log("function restart2a()");
    document.querySelector("#shrimp_container2").classList.remove("stop");
    document.querySelector("#shrimp_container2").classList.remove("move2a");
    document.querySelector("#shrimp_container2").classList.remove("pos2a");
    document.querySelector("#shrimp2").classList.remove("zoomout");

    document.querySelector("#shrimp_container2").offsetHeight;
    document.querySelector("#shrimp_container2").classList.add("pos2a");
    document.querySelector("#shrimp_container2").classList.add("move2a");
    document.querySelector("#shrimp2").addEventListener("click", zoomout2a);
}

/*seaweed*/
document.querySelector("#seaweed_container").classList.add("pos3");
document.querySelector("#seaweed_container").classList.add("move3");
document.querySelector("#seaweed_container").addEventListener("click", zoomout3);

function zoomout3() {
    console.log("function zoomout3()");
    document.querySelector("#seaweed").classList.add("zoomout");
    document.querySelector("#seaweed_container").classList.add("stop");

    document.querySelector("#seaweed_container").addEventListener("animationend", restart3);
    badsound.currentTime = 0;
    badsound.play();    
}

function restart3() {
    console.log("function restart3()");
    document.querySelector("#seaweed_container").classList.remove("stop");
    document.querySelector("#seaweed_container").classList.remove("move3");
    document.querySelector("#seaweed_container").classList.remove("pos3");
    document.querySelector("#seaweed").classList.remove("zoomout");

    document.querySelector("#seaweed_container").offsetHeight;
    document.querySelector("#seaweed_container").classList.add("pos3");
    document.querySelector("#seaweed_container").classList.add("move3");
    document.querySelector("#seaweed").addEventListener("click", zoomout3);
}

/*seaweed 2*/
document.querySelector("#seaweed_container2").classList.add("pos3a");
document.querySelector("#seaweed_container2").classList.add("move3a");
document.querySelector("#seaweed_container2").addEventListener("click", zoomout3a);

function zoomout3a() {
    console.log("function zoomout3a()");
    document.querySelector("#seaweed2").classList.add("zoomout");
    document.querySelector("#seaweed_container2").classList.add("stop");

    document.querySelector("#seaweed_container2").addEventListener("animationend", restart3a);
    badsound.currentTime = 0;
    badsound.play();    
}

function restart3a() {
    console.log("function restart3a()");
    document.querySelector("#seaweed_container2").classList.remove("stop");
    document.querySelector("#seaweed_container2").classList.remove("move3a");
    document.querySelector("#seaweed_container2").classList.remove("pos3a");
    document.querySelector("#seaweed2").classList.remove("zoomout");

    document.querySelector("#seaweed_container2").offsetHeight;
    document.querySelector("#seaweed_container2").classList.add("pos3a");
    document.querySelector("#seaweed_container2").classList.add("move3a");
    document.querySelector("#seaweed2").addEventListener("click", zoomout3a);
}

/*trashbag*/
document.querySelector("#trashbag_container").classList.add("pos4")
document.querySelector("#trashbag_container").classList.add("move4");
document.querySelector("#trashbag_container").addEventListener("click", zoomout4);

function zoomout4() {
    console.log("function zoomout4()");
    document.querySelector("#trashbag").classList.add("zoomout");
    document.querySelector("#trashbag_container").classList.add("stop");
    document.querySelector("#trashbag_container").addEventListener("animationend", restart4);
    goodsound.currentTime = 0;
    goodsound.play();
}

function restart4() {
    console.log("function restart4()");
    document.querySelector("#trashbag_container").classList.remove("stop");
    document.querySelector("#trashbag_container").classList.remove("move4");
    document.querySelector("#trashbag_container").classList.remove("pos4");
    document.querySelector("#trashbag").classList.remove("zoomout");

    document.querySelector("#trashbag_container").offsetHeight;
    document.querySelector("#trashbag_container").classList.add("pos4");
    document.querySelector("#trashbag_container").classList.add("move4");
    document.querySelector("#trashbag").addEventListener("click", zoomout4);
}

/*netto*/
document.querySelector("#netto_container").classList.add("pos5");
document.querySelector("#netto_container").classList.add("move5");
document.querySelector("#netto_container").addEventListener("click", zoomout5);

function zoomout5() {
    console.log("function zoomout5()");
    document.querySelector("#netto").classList.add("zoomout");
    document.querySelector("#netto_container").classList.add("stop");
    document.querySelector("#netto_container").addEventListener("animationend", restart5);
    goodsound.currentTime = 0;
    goodsound.play();
}

function restart5() {
    console.log("function restart5()");
    document.querySelector("#netto_container").classList.remove("stop");
    document.querySelector("#netto_container").classList.remove("move5");
    document.querySelector("#netto_container").classList.remove("pos5");
    document.querySelector("#netto").classList.remove("zoomout");

    document.querySelector("#netto_container").offsetHeight;
    document.querySelector("#netto_container").classList.add("pos5");
    document.querySelector("#netto_container").classList.add("move5");
    document.querySelector("#netto").addEventListener("click", zoomout5);
}

/*facemask*/
document.querySelector("#facemask_container").classList.add("pos6");
document.querySelector("#facemask_container").classList.add("move6");
document.querySelector("#facemask_container").addEventListener("click", zoomout6);

function zoomout6() {
    console.log("function zoomout6()");
    document.querySelector("#facemask").classList.add("zoomout");
    document.querySelector("#facemask_container").classList.add("stop");
    document.querySelector("#facemask_container").addEventListener("animationend", restart6);
    goodsound.currentTime = 0;
    goodsound.play();    
}

function restart6() {
    console.log("function restart6()");
    document.querySelector("#facemask_container").classList.remove("stop");
    document.querySelector("#facemask_container").classList.remove("move6");
    document.querySelector("#facemask_container").classList.remove("pos6");
    document.querySelector("#facemask").classList.remove("zoomout");

    document.querySelector("#facemask_container").offsetHeight;
    document.querySelector("#facemask_container").classList.add("pos6");
    document.querySelector("#facemask_container").classList.add("move6");
    document.querySelector("#facemask").addEventListener("click", zoomout6);
}

function levelComplete() {
    console.log("level complete");

    if (gameHasEnded == false) {

        document.querySelector("#levelcomplete").classList.remove("hidden");
        document.querySelector("#levelcomplete_replay").addEventListener("click", restartGame);
        document.querySelector("#levelcomplete_quit").addEventListener("click", welcomeScreen);
        
        document.querySelector("#timer").classList.add("timer_still");
        document.querySelector("#timer").classList.remove("timer");

        document.querySelector("#jelly_container").classList.value = "";
        document.querySelector("#jelly").classList.value = "";
        document.querySelector("#jelly_container2").classList.value = "";
        document.querySelector("#jelly2").classList.value = "";
        document.querySelector("#shrimp_container").classList.value = "";
        document.querySelector("#shrimp").classList.value = "";
        document.querySelector("#shrimp_container2").classList.value = "";
        document.querySelector("#shrimp2").classList.value = "";
        document.querySelector("#seaweed_container").classList.value = "";
        document.querySelector("#seaweed").classList.value = "";
        document.querySelector("#seaweed_container2").classList.value = "";
        document.querySelector("#seaweed2").classList.value = "";
        document.querySelector("#netto_container").classList.value = "";
        document.querySelector("#netto").classList.value = "";
        document.querySelector("#trashbag_container").classList.value = "";
        document.querySelector("#trashbag").classList.value = "";
        document.querySelector("#facemask_container").classList.value = "";
        document.querySelector("#facemask").classList.value = "";

        document.querySelector("#jelly").removeEventListener("click", loseLife);
        document.querySelector("#jelly2").removeEventListener("click", loseLife);
        document.querySelector("#shrimp").removeEventListener("click", loseLife);
        document.querySelector("#shrimp2").removeEventListener("click", loseLife);
        document.querySelector("#seaweed").removeEventListener("click", loseLife);
        document.querySelector("#seaweed2").removeEventListener("click", loseLife);

        document.querySelector("#trashbag").removeEventListener("click", gainPoint);
        document.querySelector("#netto").removeEventListener("click", gainPoint);
        document.querySelector("#facemask").removeEventListener("click", gainPoint);

        document.querySelector("#life1").classList.value = "";
        document.querySelector("#life1").offsetHeight;
        document.querySelector("#life1").classList.add("turtlered");

        document.querySelector("#life2").classList.value = "";
        document.querySelector("#life2").offsetHeight;
        document.querySelector("#life2").classList.add("turtlered");

        document.querySelector("#life3").classList.value = "";
        document.querySelector("#life3").offsetHeight;
        document.querySelector("#life3").classList.add("turtlered");

        gameHasEnded = true;
    }
}

function gameLose() {
    console.log("game lose");

    if (gameHasEnded == false) {

        document.querySelector("#gamelose").classList.remove("hidden");
        document.querySelector("#gamelose_retry").addEventListener("click", restartGame);
        document.querySelector("#gamelose_quit").addEventListener("click", welcomeScreen);
        
        document.querySelector("#timer").classList.add("timer_still");
        document.querySelector("#timer").classList.remove("timer");

        document.querySelector("#jelly_container").classList.value = "";
        document.querySelector("#jelly").classList.value = "";
        document.querySelector("#jelly_container2").classList.value = "";
        document.querySelector("#jelly2").classList.value = "";
        document.querySelector("#shrimp_container").classList.value = "";
        document.querySelector("#shrimp").classList.value = "";
        document.querySelector("#shrimp_container2").classList.value = "";
        document.querySelector("#shrimp2").classList.value = "";
        document.querySelector("#seaweed_container").classList.value = "";
        document.querySelector("#seaweed").classList.value = "";
        document.querySelector("#seaweed_container2").classList.value = "";
        document.querySelector("#seaweed2").classList.value = "";
        document.querySelector("#netto_container").classList.value = "";
        document.querySelector("#netto").classList.value = "";
        document.querySelector("#trashbag_container").classList.value = "";
        document.querySelector("#trashbag").classList.value = "";
        document.querySelector("#facemask_container").classList.value = "";
        document.querySelector("#facemask").classList.value = "";

        document.querySelector("#jelly").removeEventListener("click", loseLife);
        document.querySelector("#jelly2").removeEventListener("click", loseLife);
        document.querySelector("#shrimp").removeEventListener("click", loseLife);
        document.querySelector("#shrimp2").removeEventListener("click", loseLife);
        document.querySelector("#seaweed").removeEventListener("click", loseLife);
        document.querySelector("#seaweed2").removeEventListener("click", loseLife);

        document.querySelector("#trashbag").removeEventListener("click", gainPoint);
        document.querySelector("#netto").removeEventListener("click", gainPoint);
        document.querySelector("#facemask").removeEventListener("click", gainPoint);

        document.querySelector("#life1").classList.value = "";
        document.querySelector("#life1").offsetHeight;
        document.querySelector("#life1").classList.add("turtlered");

        document.querySelector("#life2").classList.value = "";
        document.querySelector("#life2").offsetHeight;
        document.querySelector("#life2").classList.add("turtlered");

        document.querySelector("#life3").classList.value = "";
        document.querySelector("#life3").offsetHeight;
        document.querySelector("#life3").classList.add("turtlered");
        
        gameHasEnded = true;
    }
}

function gameOver() {
    console.log("game over");    
        if (gameHasEnded == false) {
            
        document.querySelector("#gameover").classList.remove("hidden");
        document.querySelector("#gameover_retry").addEventListener("click", restartGame);
        document.querySelector("#gameover_quit").addEventListener("click", welcomeScreen);
            
        document.querySelector("#timer").classList.remove("timer");
        document.querySelector("#timer").classList.add("timer_still");        

        document.querySelector("#jelly_container").classList.value = "";
        document.querySelector("#jelly").classList.value = "";
        document.querySelector("#jelly_container2").classList.value = "";
        document.querySelector("#jelly2").classList.value = "";
        document.querySelector("#shrimp_container").classList.value = "";
        document.querySelector("#shrimp").classList.value = "";
        document.querySelector("#shrimp_container2").classList.value = "";
        document.querySelector("#shrimp2").classList.value = "";
        document.querySelector("#seaweed_container").classList.value = "";
        document.querySelector("#seaweed").classList.value = "";
        document.querySelector("#seaweed_container2").classList.value = "";
        document.querySelector("#seaweed2").classList.value = "";
        document.querySelector("#netto_container").classList.value = "";
        document.querySelector("#netto").classList.value = "";
        document.querySelector("#trashbag_container").classList.value = "";
        document.querySelector("#trashbag").classList.value = "";
        document.querySelector("#facemask_container").classList.value = "";
        document.querySelector("#facemask").classList.value = "";

        document.querySelector("#jelly").removeEventListener("click", loseLife);
        document.querySelector("#jelly2").removeEventListener("click", loseLife);
        document.querySelector("#shrimp").removeEventListener("click", loseLife);
        document.querySelector("#shrimp2").removeEventListener("click", loseLife);
        document.querySelector("#seaweed").removeEventListener("click", loseLife);
        document.querySelector("#seaweed2").removeEventListener("click", loseLife);

        document.querySelector("#trashbag").removeEventListener("click", gainPoint);
        document.querySelector("#netto").removeEventListener("click", gainPoint);
        document.querySelector("#facemask").removeEventListener("click", gainPoint);

        document.querySelector("#life1").classList.value = "";
        document.querySelector("#life1").offsetHeight;
        document.querySelector("#life1").classList.add("turtlered");

        document.querySelector("#life2").classList.value = "";
        document.querySelector("#life2").offsetHeight;
        document.querySelector("#life2").classList.add("turtlered");

        document.querySelector("#life3").classList.value = "";
        document.querySelector("#life3").offsetHeight;
        document.querySelector("#life3").classList.add("turtlered");

        gameHasEnded = true;
    }

}

function restartGame() {
    document.querySelector("#levelcomplete").classList.add("hidden");
    document.querySelector("#gamelose").classList.add("hidden");
    document.querySelector("#gameover").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
    
    if (gameHasEnded == false) {

        document.querySelector("#jelly_container").classList.value = "";
        document.querySelector("#jelly").classList.value = "";
        document.querySelector("#jelly_container2").classList.value = "";
        document.querySelector("#jelly2").classList.value = "";
        document.querySelector("#shrimp_container").classList.value = "";
        document.querySelector("#shrimp").classList.value = "";
        document.querySelector("#shrimp_container2").classList.value = "";
        document.querySelector("#shrimp2").classList.value = "";
        document.querySelector("#seaweed_container").classList.value = "";
        document.querySelector("#seaweed").classList.value = "";
        document.querySelector("#seaweed_container2").classList.value = "";
        document.querySelector("#seaweed2").classList.value = "";
        document.querySelector("#netto_container").classList.value = "";
        document.querySelector("#netto").classList.value = "";
        document.querySelector("#trashbag_container").classList.value = "";
        document.querySelector("#trashbag").classList.value = "";
        document.querySelector("#facemask_container").classList.value = "";
        document.querySelector("#facemask").classList.value = "";

        document.querySelector("#jelly").removeEventListener("click", loseLife);
        document.querySelector("#jelly2").removeEventListener("click", loseLife);
        document.querySelector("#shrimp").removeEventListener("click", loseLife);
        document.querySelector("#shrimp2").removeEventListener("click", loseLife);
        document.querySelector("#seaweed").removeEventListener("click", loseLife);
        document.querySelector("#seaweed2").removeEventListener("click", loseLife);

        document.querySelector("#trashbag").removeEventListener("click", gainPoint);
        document.querySelector("#netto").removeEventListener("click", gainPoint);
        document.querySelector("#facemask").removeEventListener("click", gainPoint);

        document.querySelector("#life1").classList.value = "";
        document.querySelector("#life1").offsetHeight;
        document.querySelector("#life1").classList.add("turtlered");

        document.querySelector("#life2").classList.value = "";
        document.querySelector("#life2").offsetHeight;
        document.querySelector("#life2").classList.add("turtlered");

        document.querySelector("#life3").classList.value = "";
        document.querySelector("#life3").offsetHeight;
        document.querySelector("#life3").classList.add("turtlered");
        
        gameHasEnded = true;
    }

    points = 0;
    document.querySelector("#points").textContent = points;

    lives = 3;

    gameIsPaused = false;
    gameHasEnded = false;

    startGame();
}

function paused() {
    console.log("paused screen");
    gamePaused();
    clicksound.play();

    document.querySelector("#pause_screen").classList.remove("hidden");
    document.querySelector("#continue").addEventListener("click", hidepaused);
    document.querySelector("#pause_quit").addEventListener("click", welcomeScreen);
    document.querySelector("#pause_retry").addEventListener("click", restartGame);
    document.querySelector("#on").classList.remove("hidden");
    document.querySelector("#on").addEventListener("click", musicMuted);
}

function hidepaused() {
    document.querySelector("#pause_screen").classList.add("hidden");
    gameResume();
    clicksound.play();

}

function gamePaused() {
    if (gameIsPaused == false) {
        console.log("game is paused");

        document.querySelector("#jelly_container").classList.add("paused");
        document.querySelector("#jelly_container2").classList.add("paused");
        document.querySelector("#shrimp_container").classList.add("paused");
        document.querySelector("#shrimp_container2").classList.add("paused");
        document.querySelector("#seaweed_container").classList.add("paused");
        document.querySelector("#seaweed_container2").classList.add("paused");
        document.querySelector("#trashbag_container").classList.add("paused");
        document.querySelector("#netto_container").classList.add("paused");
        document.querySelector("#facemask_container").classList.add("paused");

        document.querySelector("#jelly").classList.add("paused");
        document.querySelector("#jelly2").classList.add("paused");
        document.querySelector("#shrimp").classList.add("paused");
        document.querySelector("#shrimp2").classList.add("paused");
        document.querySelector("#seaweed").classList.add("paused");
        document.querySelector("#seaweed2").classList.add("paused");
        document.querySelector("#trashbag").classList.add("paused");
        document.querySelector("#netto").classList.add("paused");
        document.querySelector("#facemask").classList.add("paused");
        
        document.querySelector("#timer").classList.add("paused");

        gameIsPaused = true;
    }
}

function gameResume() {
    if (gameIsPaused == true) {
    console.log("game resume");

        document.querySelector("#jelly_container").classList.remove("paused");
        document.querySelector("#jelly_container2").classList.remove("paused");
        document.querySelector("#shrimp_container").classList.remove("paused");
        document.querySelector("#shrimp_container2").classList.remove("paused");
        document.querySelector("#seaweed_container").classList.remove("paused");
        document.querySelector("#seaweed_container2").classList.remove("paused");
        document.querySelector("#trashbag_container").classList.remove("paused");
        document.querySelector("#netto_container").classList.remove("paused");
        document.querySelector("#facemask_container").classList.remove("paused");

        document.querySelector("#jelly").classList.remove("paused");
        document.querySelector("#jelly2").classList.remove("paused");
        document.querySelector("#shrimp").classList.remove("paused");
        document.querySelector("#shrimp2").classList.remove("paused");
        document.querySelector("#seaweed").classList.remove("paused");
        document.querySelector("#seaweed2").classList.remove("paused");
        document.querySelector("#trashbag").classList.remove("paused");
        document.querySelector("#netto").classList.remove("paused");
        document.querySelector("#facemask").classList.remove("paused");
        
        document.querySelector("#timer").classList.remove("paused");

        gameIsPaused = false;
    }
}

function reset() {
    console.log("reset");    
    document.querySelector("#jelly_container").classList.value = "";
        document.querySelector("#jelly").classList.value = "";
        document.querySelector("#jelly_container2").classList.value = "";
        document.querySelector("#jelly2").classList.value = "";
        document.querySelector("#shrimp_container").classList.value = "";
        document.querySelector("#shrimp").classList.value = "";
        document.querySelector("#shrimp_container2").classList.value = "";
        document.querySelector("#shrimp2").classList.value = "";
        document.querySelector("#seaweed_container").classList.value = "";
        document.querySelector("#seaweed").classList.value = "";
        document.querySelector("#seaweed_container2").classList.value = "";
        document.querySelector("#seaweed2").classList.value = "";
        document.querySelector("#netto_container").classList.value = "";
        document.querySelector("#netto").classList.value = "";
        document.querySelector("#trashbag_container").classList.value = "";
        document.querySelector("#trashbag").classList.value = "";
        document.querySelector("#facemask_container").classList.value = "";
        document.querySelector("#facemask").classList.value = "";

        document.querySelector("#jelly").removeEventListener("click", loseLife);
        document.querySelector("#jelly2").removeEventListener("click", loseLife);
        document.querySelector("#shrimp").removeEventListener("click", loseLife);
        document.querySelector("#shrimp2").removeEventListener("click", loseLife);
        document.querySelector("#seaweed").removeEventListener("click", loseLife);
        document.querySelector("#seaweed2").removeEventListener("click", loseLife);

        document.querySelector("#trashbag").removeEventListener("click", gainPoint);
        document.querySelector("#netto").removeEventListener("click", gainPoint);
        document.querySelector("#facemask").removeEventListener("click", gainPoint);

        document.querySelector("#life1").classList.value = "";
        document.querySelector("#life1").offsetHeight;
        document.querySelector("#life1").classList.add("turtlered");

        document.querySelector("#life2").classList.value = "";
        document.querySelector("#life2").offsetHeight;
        document.querySelector("#life2").classList.add("turtlered");

        document.querySelector("#life3").classList.value = "";
        document.querySelector("#life3").offsetHeight;
        document.querySelector("#life3").classList.add("turtlered");
    
        bgmusic.muted = false;
}

function playBgMusic() {
    console.log("play background music");
    bgmusic.play();
    bgmusic.volume = 0.1;
}

function musicMuted() {
    bgmusic.muted = true;
    goodsound.muted = true;
    badsound.muted = true;
    document.querySelector("#on").classList.add("hidden");
    document.querySelector("#off").classList.remove("hidden");
    document.querySelector("#off").addEventListener("click", musicUnmute);
}

function musicUnmute() {
    bgmusic.muted = false;
    goodsound.muted = false;
    badsound.muted = false;
    document.querySelector("#on").classList.remove("hidden");
    document.querySelector("#off").classList.add("hidden");
    document.querySelector("#off").addEventListener("click", musicMuted);    
}