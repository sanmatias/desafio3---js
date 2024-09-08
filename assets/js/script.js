const ele = document.getElementById("ele1")
let pintar = function(color){
    ele.addEventListener("click",()=> ele.style.backgroundColor = color);
    }

pintar('yellow')