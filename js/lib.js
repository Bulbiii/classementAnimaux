var timerPercentage = 0;

function restart_score() {
    let scoreContainer = document.querySelector("#scoreValue");
    
    scoreContainer.innerHTML = "0";
    timerPercentage = 0;
}

function update_score(){
    let scoreContainer = document.querySelector("#scoreValue");

    scoreContainer.innerHTML = Math.round(Number(scoreContainer.innerHTML) + (100 - timerPercentage));
}

function start_timer(){
    let timerInnerBar = document.querySelector("#timerInnerBar");
    let animalImage = document.querySelector("#mainDivImage img");
    
    let interval = setInterval(_ => {
        timerInnerBar.style.height = (100 - timerPercentage) + "%";
        animalImage.style.filter = "blur(" + (10 - timerPercentage / 10) + "px)";

        timerPercentage += 0.1;

        if (timerPercentage >=100){
           clearInterval(interval); 
        }
    }, 10);
}


function rand(max){
    return Math.floor(Math.random() * max);
}