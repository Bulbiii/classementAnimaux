function create_footer_vue(container) {
    let footer = create_element("footer", container, null);

    // Names
    create_element("p", footer, "footerNames", "Chloé FAUCON (CMI) - Julie TROGNON");
    // pathway
    create_element("p", footer, "footerPathway", "L2 INFO - USMB")
}