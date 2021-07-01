const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");


const handleResize = function(){
    title.style.color = colors[0]
    title.innerHTML = "Resize!"
}

const handleMouseEnter = function(){
    title.style.color = colors[1];
    title.innerHTML = "Mouse is here"
}

const handleMouseLeave = function(){
    title.style.color = colors[2];
    title.innerHTML = "Mouse is gone"
}

const handleMouseRightClick = function(){
    title.style.color = colors[3];
    title.innerHTML = "Right Click"
}


window.addEventListener("resize", handleResize);
window.addEventListener("contextmenu", handleMouseRightClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

title.style.display = "inline";