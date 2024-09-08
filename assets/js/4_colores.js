const cuadrados =document.querySelectorAll(".cuadrado")


let cambio_color = function(){
    cuadrados.forEach(cuadrado =>cuadrado.addEventListener("click",()=>cuadrado.style.backgroundColor = 'black' ))
};


cambio_color()