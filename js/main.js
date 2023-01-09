let menuButton = document.getElementById("menu_button");

menuButton.addEventListener("click", ()=> {

    let menu = document.getElementById("Menu");

    menu.classList.toggle("show-menu");
});

let articleButton = document.getElementById("article_button");

articleButton.addEventListener("click", ()=> {
    let menu = document.getElementById("articleMenu");
    menu.classList.toggle("show-menu-article");
});
