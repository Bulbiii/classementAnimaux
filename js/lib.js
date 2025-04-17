var timerPercentage = 0;

function restart_score() {
    let scoreContainer = document.querySelector("#scoreValue");
    
    scoreContainer.innerHTML = "0";

    restart_timer()
}

function update_score(){
    let scoreContainer = document.querySelector("#scoreValue");

    scoreContainer.innerHTML = Math.round(Number(scoreContainer.innerHTML) + (100 - timerPercentage));
}

function restart_timer(){
    oldTimer = timerPercentage;
    timerPercentage = 0;

    if (oldTimer >= 100){   
        start_timer();
    }
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



function getAllId(){
    let idList = axios.get("/json/json.php?table=animaux&type=all&filter=idOnly").then(response => {
        return response.data;
    })

    return idList;
}

