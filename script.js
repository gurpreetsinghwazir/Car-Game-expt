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
    speed:3,
    score:0
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
 
    moveLines()
    moveEnemy(car)

    if(player.start){
        if(keys.ArrowUp && player.y > (road.top + 250)){
            player.y = player.y - player.speed;
        }
        if(keys.ArrowDown && player.y < (road.bottom-130)){
            player.y = player.y + player.speed;                
        }
        if(keys.ArrowRight && player.x < (road.width - 50) ){
            player.x = player.x + player.speed;
        } if(keys.ArrowLeft && player.x > 0){
            player.x = player.x - player.speed;
        } 
        car.style.left= player.x + "px";
        car.style.top = player.y + "px";

        player.score++;
        score.textContent = "Score: " + player.score;

        requestAnimationFrame(gameplay);
    }
    
}

function moveLines(){
let border = document.querySelectorAll(".divider");  
border.forEach((divider) => {
    if(divider.y >= 800){
        divider.y = divider.y - 800; 
    }

    divider.y  = divider.y + player.speed;
    divider.style.top = divider.y + "px";  
})
}

function moveEnemy(car){
    const enemies = document.querySelectorAll(".enemy");  
    enemies.forEach((enemy) => {
        if (isCollide(car, enemy)){
            
            console.log("Hit")
            endGame()
        }

        if(enemy.y >= 800){
            enemy.y = enemy.y - 800; 
        }    
        enemy.y  = enemy.y + player.speed;
        enemy.style.top = enemy.y + "px";  
    })
    }
    
function isCollide(a,b){
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRefct();
    let collideCondition = (aRect.bottom < bRect.top)||
    (aRect.top > bRect.bottom) ||
    (aRect.right < bRect.left) ||
    (aRect.left > bRect.right)
    return !collideCondition;
}




function endGame(){ 
    player.start = false;
    startScreen.classList.remove("hide");
    gameArea.classList.add("hide");
    startScreen.innerHTML = "Game Over <br> Your score is " + player.score + " <br> Press the start button to play again";
}

function start(evenDetails){
    
   

    console.log("start");
    
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");   
    player.start = true // when i write the end code make sure to change this to false

    player.start = true;
    requestAnimationFrame(gameplay); 

        //lets make divier
        for(let x =0; x <=4; x++){
            let divider = document.createElement("div");
            divider.className = "divider";
            divider.y = x*200;
            divider.style.top = divider.y + "px";
            gameArea.append(divider);
            
        }

    //lets make a car
    let car = document.createElement("div");
    car.className = "car";
    car.innerHTML = "car";
    gameArea.append(car);
    
    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    for(let i = 0; i <=2; i++){
        let emeny = document.createElement("div");
        emeny.className = "enemy";
        emeny.y = (i+1) * 150 ;
        emeny.style.top = emeny.y + "px";
    emeny.style.left = parseInt(Math.random()*250)+ "px";
        emeny.style.backgroundColor = "green";
        gameArea.append(emeny);
    }      




}

