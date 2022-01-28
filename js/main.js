let openTab = (evt, tabName) => {
    let i, tabContent, tabs;

    tabContent = document.getElementsByClassName("card-grid");
    for (i = 0; i < tabContent.length; i++) tabContent[i].style.display = "none";

    tabs = document.getElementsByClassName("nav__tab");
    for (i = 0; i < tabs.length; i++) {
        if (tabs[i].className !== "nav__tab nav__tab--hamburger") tabs[i].className = tabs[i].className.replace(" nav__tab--active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " nav__tab--active";
}

let toggleRespNav = () => {
    let navClass = document.getElementById("nav").className;

    if ( navClass === "nav") {
        document.getElementById("nav").className += " nav--responsive";
        console.log('done');
    } else {
        document.getElementById("nav").className = "nav"
    }
}

document.addEventListener("DOMContentLoaded", (evt) => { 
    document.getElementById("defaultBtn").click();
    document.getElementById("rbt").checked = true;
});

