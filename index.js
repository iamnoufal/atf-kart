var nav = document.getElementById("nav");
var menu = document.getElementById("menubtn");
var close = document.getElementById("closebtn");

function shownav() {
    nav.style.display="flex"
    nav.style.height="auto";
    menu.style.display="none";
    close.style.display="block";
}

function hidenav() {
    nav.style.display="none"
    nav.style.height="0";
    menu.style.display="block";
    close.style.display="none";
}