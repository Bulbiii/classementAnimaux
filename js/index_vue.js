function create_index_vue(){
    let container = document.querySelector("body");
    container.innerHTML = "";

    create_header_vue(container);

    create_main_vue(container);

    // create_misc_vue(container);

    create_footer_vue(container);
}