function create_element(type, parent, id, content=null){
    let element = document.createElement(type);
    parent.appendChild(element);
    
    if (id != null){
        element.id = id;
    }
    
    // Check if content is given
    if (content != null){
        element.innerHTML = content;
    }

    return element;
}