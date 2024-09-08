const key1 = document.getElementById("key")
const key2 = document.getElementById("key2")

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    key1.style.backgroundColor = "violet"
    } else if (event.key === 's') {
    /* Cambiar a color 2 */
    key1.style.backgroundColor = "orange"
    }else if(event.key === 'd'){
    key1.style.backgroundColor = "cyan"
    }
    })


    

    document.addEventListener('keydown', function (event) {
        contenedor = document.querySelector("body")
        nuevo_div =document.createElement("div");
        nuevo_div=document.create
        contenedor.appenChild(nuevo_div)
        if (event.key === 'q') {
        /* Cambiar a color 1 */
        key2.style.backgroundColor = "purple"
        } else if (event.key === 'w') {
        /* Cambiar a color 2 */
        key2.style.backgroundColor = "grey"
        }else if(event.key === 'e'){
        key2.style.backgroundColor = "brown"
        }
        })