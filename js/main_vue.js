function create_main_vue(container){
    console.log("tototo");
    
    
    let main = create_element("article", container, "mainArticle");
    
    getAllId().then(idList => {
        let id = idList[rand(idList.length)].id;
        console.log(idList);
        
        console.log(id);
        
        axios.get("/json/json.php?table=animaux&type=byId&id=" + id).then(response => {
            console.log(response);
            

            create_image_blur_container(main, response.data.photo[0].photo, response.data.description[0].description);
            
            create_buttons_container(main, id, response.data.options[0]);
            create_misc_vue(container);
        });

    });
}


function create_image_blur_container(container, img, alt){
    // div allow to have a border
    let divImage = create_element("div", container, "mainDivImage");
    
    let image = create_element("img", divImage, null);
    
    console.log(img);
    

    image.src = img;
    image.alt = alt;
}


function create_buttons_container(container, id, options){
    let buttonsContainer = create_element("div", container, "mainButtonsContainer");

    for (optionName in options) {
        let choiceButton = create_element("button", buttonsContainer, optionName, options[optionName]);
        choiceButton.value = id;
        choiceButton.onclick = selectedChosenAnimal;
    };
}

function selectedChosenAnimal(){
    let buttonNumber = this.id[this.id.length-1];
    
    let id = this.value

    axios.get("/json/json.php?table=animaux&type=byId&id=" + id).then(response => {
        // console.log(response.data.solution[0].solution);
        
        if (buttonNumber == Number(response.data.solution[0].solution)){
            update_score();
        }

        changeAnimal();
        restart_timer();
    });
}


function changeAnimal(){
    getAllId().then(idList => {
        let id = idList[rand(idList.length)].id;
        console.log(id);
        
        axios.get("/json/json.php?table=animaux&type=byId&id=" + id).then(response => {
            let image = document.querySelector("#mainDivImage img");
            image.src = response.data.photo[0].photo;
            image.alt = response.data.description[0].description
            
            let buttonsContainer = document.querySelector("#mainButtonContainer");
            let options = response.data.options[0];
            for (optionName in options) {
                let choiceButton = document.querySelector("#" + optionName);
                choiceButton.value = id;
                choiceButton.innerHTML = options[optionName];
            };
        });

    });
}