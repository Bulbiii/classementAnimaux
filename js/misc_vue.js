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