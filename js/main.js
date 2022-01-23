let openTab = (evt, tabName) => {
    let i, tabContent, tabs;

    tabContent = document.getElementsByClassName("card-grid");
    for (i = 0; i < tabContent.length; i++) tabContent[i].style.display = "none";

    tabs = document.getElementsByClassName("nav__tab");
    for (i = 0; i < tabs.length; i++) tabs[i].className = tabs[i].className.replace(" nav__tab--active", "");

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " nav__tab--active";
}

document.addEventListener("DOMContentLoaded", (evt) => { 
    document.getElementById("defaultBtn").click();
    document.getElementById("rbt").checked = true;
});

