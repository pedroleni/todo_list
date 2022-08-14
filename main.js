
/*------------------------------------------------------------------
-------------- 1) Apuntar a las zonas luego trabajaremos-------------
--------------------------------------------------------------------*/

const input = document.querySelector("input");
const addBoton = document.querySelector(".boton_add");
const boton_borraAll = document.querySelector(".boton_borraAll");
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");


/*------------------------------------------------------------------
----------------------- 2) CREAR LAS TAREAS -------------------------
--------------------------------------------------------------------*/
boton_borraAll.style.display = "none";
addBoton.addEventListener("click", (e) => {
  //Para que no se recargue la pagina la estar en form
  e.preventDefault();


  //coge el valor del imput
  const text = input.value;
  //Si hay algo en el imput creamos un li y p. A p le añadimos el value del imput 
  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addDeleteBoton());
    ul.appendChild(boton_borraAll)
    // borraremos la  barra del imput
    input.value = "";
    //cuando no haya tarear no se muestra el div VACIO 
    vacio.style.display = "none";
    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      //SI NO HAY TAREAS MOSTAR EL DIV VACIO  
      boton_borraAll.style.display = "none";  
    } else{boton_borraAll.style.display = "block";}

  }
  boton_borraTodo();
});

/*------------------------------------------------------------------
-------------------- 3) FUNCIONALIDAD DE BORRADO --------------------
--------------------------------------------------------------------*/

function addDeleteBoton() {
  //creamos el boton 
  const deleteBoton = document.createElement("button");

  deleteBoton.textContent = "X";
  // le añadimos la clase boton-delete
  deleteBoton.className = "boton_delete";


  deleteBoton.addEventListener("click", (e) => {

    //seleccionamoos el padre del boton que es el li 
    const item = e.target.parentElement;
    ul.removeChild(item);
    
    //SELECCIONAMOS TODOS LOS LI
    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      //SI NO HAY TAREAS MOSTAR EL DIV VACIO  
      vacio.style.display = "block";
      boton_borraAll.style.display = "none"
      
      
    }
    
  });
  

  return deleteBoton;
}

const boton_borraTodo = () =>{
  
  const li = document.querySelectorAll("li");

  console.log(li )
  
  
      boton_borraAll.addEventListener("click", () => {
        for(i=0; i<li.length;i++){
          li[i].remove()
        }
        boton_borraAll.style.display = "none";
        vacio.style.display = "block";
      })

  const items = document.querySelectorAll("li");

    
}