function create_main_vue(container){
    let main = create_element("article", container, "mainArticle");

    create_image_blur_container(main);

    create_buttons_container(main);
}

function create_image_blur_container(container){
    // div allow to have a border
    let divImage = create_element("div", container, "mainDivImage");
    
    let image = create_element("img", divImage, null);
    image.src = "/img/graou_mathier.png";
    image.alt = "picture of an animal";
}


function create_buttons_container(container){
    let buttonsContainer = create_element("div", container, "mainButtonsContainer");

    let choices = ["chien", "chat", "cheval", "vache"];
    choices.forEach(choice => {
        let choiceButton = create_element("button", buttonsContainer, null, choice);
        choiceButton.onclick = selectedChosenAnimal;
    });
}

function selectedChosenAnimal(){
    console.log(this.innerHTML);
}