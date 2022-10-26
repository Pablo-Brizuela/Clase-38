window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let boton = document.querySelector(".botonAgregar")
    
    
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


/*     boton.addEventListener("mouseleave", (e) => {
        
        boton.style.color = "red"
                e.preventDefault()


    })

    boton.addEventListener("mouseout", (e) => {
        
        boton.style.color = "white"
                e.preventDefault()


    }) */

    titulo.addEventListener("mouseover", ()=>{
        titulo.style.color = "red"
    })

    titulo.addEventListener("mouseleave", ()=>{
        titulo.style.color = "black"
    })


}