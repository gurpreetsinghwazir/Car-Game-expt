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
    speed:5,
    start: false
};


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
        keys[releasedKey] = false;
    }
    
}    

function gameplay(){
    let car = document.querySelector(".car");
    let road = gameArea.getBoundingClientRect()
    console.log(road)


    if(player.start){
        if(keys.ArrowUp && player.y > (road.top + 250)){
            player.y = player.y - player.speed;
        }
        if(keys.ArrowDown && player.y < (road.bottom-130)){
            player.y = player.y + player.speed;                
        }
        if(keys.ArrowRight && player.x > 0 ){
            player.x = player.x + player.speed;
        } if(keys.ArrowLeft && player.x < (road.width - 50)){
            player.x = player.x - player.speed;
        }
        car.style.left= player.x + "px";
        car.style.top = player.y + "px";



        requestAnimationFrame(gameplay);
    }
    
}


function start(evenDetails){
    console.log("start");
    
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");   
    player.start = true // when i write the end code make sure to change this to false

    player.start = true;
    requestAnimationFrame(gameplay); 

    //lets make a car
    let car = document.createElement("div");
    car.className = "car";
    car.innerHTML = "car";
    gameArea.append(car);
    
    player.x = car.offsetLeft;
    player.y = car.offsetTop;


}

