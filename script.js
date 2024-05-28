let score = document.querySelector(".score");
let startScreen = document.querySelector(".startscreen");
let gameArea = document.querySelector(".gameArea");

startScreen.addEventListener("click", start)

document.addEventListener("keydown", keyPress);
document.addEventListener("keyup", keyRelease);

let keys= {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player= {

}


function keyPress(eventDetails){
    eventDetails.preventDefault();
    let pressedKey = eventDetails.key;
    if(pressedKey === "ArrowUp" || pressedKey === "ArrowDown" || pressedKey === "ArrowLeft" || pressedKey === "ArrowRight"){
        keys[pressedKey] = true;
    }

}    

function keyRelease(eventDetails){
    eventDetails.preventDefault();
    let releasedKey = eventDetails.key;
    if(releasedKey === "ArrowUp" || releasedKey === "ArrowDown" || releasedKey === "ArrowLeft" || releasedKey === "ArrowRight"){
        keys[releasedKey] = true;
    }
    
}    

function gameplay(){
    if(player.start){
        console.log("gameplay");
        requestAnimationFrame(gameplay);
    }
    
}





function start(evenDetails){
    player.start = true // when i write the end code make sure to change this to false
    console.log("start");
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");
    requestAnimationFrame(gameplay);
}
