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

    const inputTitulo = document.querySelector("#titulo");

    let estadoSecreto = 0;
  
    inputTitulo.addEventListener("keypress", (e) => {
      /**
       * ● 0 significa que todavía no escribió nada.
          ● 1 significa que escribió "s".
          ● 2 significa que escribió "se".
          ● 3 significa que escribió "sec".
          ● 4 significa que escribió "secr".
          ● 5 significa que escribió "secre".
          ● 6 significa que escribió "secret".
       */
  
      console.log(estadoSecreto);
      console.log(e.key);
  
      switch (estadoSecreto) {
        case 0:
          // if (e.key == "s") {
          //   estadoSecreto++;
          // } else {
          //   estadoSecreto = 0;
          // }
          e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0);
          break;
        case 1:
          if (e.key == "e") {
            estadoSecreto++;
          } else {
            estadoSecreto = 0;
          }
          break;
        case 2:
          if (e.key == "c") {
            estadoSecreto++;
          } else {
            estadoSecreto = 0;
          }
          break;
        case 3:
          if (e.key == "r") {
            estadoSecreto++;
          } else {
            estadoSecreto = 0;
          }
          break;
        case 4:
          if (e.key == "e") {
            estadoSecreto++;
          } else {
            estadoSecreto = 0;
          }
          break;
        case 5:
          if (e.key == "t") {
            estadoSecreto++;
          } else {
            estadoSecreto = 0;
          }
          break;
        case 6:
          if (e.key == "o") {
            estadoSecreto = 0;
            alert("Palabra secreta");
          } else {
            estadoSecreto = 0;
          }
          break;
  
        default:
          break;
      }
    });


    
}

/* OTRAS FORMAS DE HACER LO MISMO PERO NO ES TAN RECOMENDABLE PARA LA MANTENCIÓN DEL CÓDIGO */
////////////////////////////////////////////////////////////////////////
/**
 * let eS = 0;
    let inputTitulo = document.querySelector('#titulo');
    inputTitulo.addEventListener('keypress', (e) => {

         (eS == 0 && e.key == 's')? eS = 1
        :(eS == 1 && e.key == 'e')? eS = 2
        :eS == 2 && e.key == 'c'? eS = 3
        :eS == 3 && e.key == 'r'? eS = 4
        :eS == 4 && e.key == 'e'? eS = 5
        :eS == 5 && e.key == 't'? eS = 6
        :eS == 6 && e.key == 'o'? (eS = 0, alert('SECRETO MAGICO'))
        :eS == 6 && e.key == 's'? eS = 1 : eS = 0;
    })

 */
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
/**
    let secreto = document.querySelector('#titulo');
    let estado = 0;
    secreto.addEventListener('keypress', function(e){
        let key = e.key;
        const deletrea = {
            s: (e) => {(e == 0) ? (estado = 1) : (estado = 0)},
            e: (e) => {(e == 1) ? (estado = 2) : ((e == 4)? (estado = 5) : (estado = 0))},
            c: (e) => {(e == 2) ? (estado = 3) : (estado = 0)},
            r: (e) => {(e == 3) ? (estado = 4) : (estado = 0)},
            t: (e) => {(e == 5) ? (estado = 6) : (estado = 0)},
            o: (e) => {(e == 6) ? (estado = 7) : (estado = 0)}
        }
        if (deletrea[key]){ // deletrea.key
        deletrea[key](estado);
        } else {
            estado = 0;
        }
        console.log(estado);
        if (estado == 7){
            alert("SECRETO MÁGICO");
            estado = 0;
        }
    })

*/
/////////////////////////////////////////////////////////////////////////////