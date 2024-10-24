window.addEventListener('DOMContentLoaded', start, false);

function start() {
    alert ('Page loaded');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeColor, false);
    buttons[1].addEventListener('click', changeColor2, false);
    
}

function changeColor() {
    var p1 = document.getElementById("colorToggle")
    { p1.style.backgroundColor = "green";  }
    
    /* here, style is a *property*: the CSS styling of an element: 
     * you can add a CSS property after invoking style. */
}