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




function start(evenDetails){
    console.log("start");
}
