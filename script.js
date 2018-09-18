
/* Lägger till en eventlyssnare på när webbläsarfönstrets storlek ändras */
addEventListener("resize", onWindowResize);

function onWindowResize() {
    if (window.innerWidth >= 768) {
        showHideMenubarConent(true);
    }
}

function menuButtonClicked() {
    showHideMenubarConent();
}

function showHideMenubarConent(disabled) {
    var header = document.querySelector("header");
    if (header.classList.contains("fullscreen")) {
        header.classList.remove("fullscreen");
    } else if(!disabled) {
        header.classList.add("fullscreen");
    }

    var list = header.querySelector("ul");
    
    for (var i = 0; i < list.children.length; i++) {
        if (list.children[i].classList.contains("show")) {
            list.children[i].classList.remove("show");
        } else if (!disabled) {
            list.children[i].classList.add("show");
        }
    }
}

function textSizeButtonClicked() {
    var textSizeButtonCornerIcon = document.querySelector(".text-size-icon .cornered-lr");
    if (textSizeButtonCornerIcon.classList.contains("fa-search-plus")) {
        textSizeButtonCornerIcon.classList.replace("fa-search-plus", "fa-search-minus");
        document.body.style.fontSize = "1.2em";
    } else {
        textSizeButtonCornerIcon.classList.replace("fa-search-minus", "fa-search-plus");
        document.body.style.fontSize = "1em";
    }
}