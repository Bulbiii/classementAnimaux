function create_misc_vue(container){
    add_timer_vue(container);
    add_score_vue(container);
    add_restart_vue(container);

    start_timer();
}

// ---------------------------------------
// ---------------- Timer ----------------
// ---------------------------------------

function add_timer_vue(container){
    let timerOuterBar = create_element("div", container, "timerOuterBar");
    create_element("div", timerOuterBar, "timerInnerBar");

    let particleOverlay = create_element("div", timerOuterBar, "particleOverlay");
    
    let i = 0;
    let initParticles = setInterval(_ => { 
        add_particle(particleOverlay);

        i++;

        if (i >= 10){
            clearInterval(initParticles);
        }
    }, 300);
    
    setTimeout(_ => {

        setInterval(_ => {
            particleOverlay.removeChild(particleOverlay.children[1]);
            
            add_particle(particleOverlay);
        }, 300)
    }, 3000)
}

function add_particle(container){
    let particle = create_element("div", container, null);
    particle.classList.add("particle");

    let x = rand(70);
    let y = rand(100);

    let opacity= rand(60) / 100;

    let scale = rand(6) + 1;

    particle.style.left = x + "%";
    particle.style.top = y + "%";

    particle.style.width = scale + "px";
    particle.style.height = scale + "px";

    particle.style.opacity = opacity;
}

// ---------------------------------------
// ---------------- Score ----------------
// ---------------------------------------

function add_score_vue(container){
    let score = create_element("div", container, "score");
    create_element("p", score, "scoreValue", "0");
    create_element("p", score, "scoreUnit", "pts");
}

// ----------------------------------------
// ---------------- switch ----------------
// ----------------------------------------

function add_restart_vue(container){
    let restart = create_element("button", container, "restart");
    restart.onclick = restart_score;

    let restartImg = create_element("img", restart, "restartImg");
    restartImg.src = "/img/restart.png";
}