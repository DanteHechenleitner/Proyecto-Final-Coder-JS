let  datos = fetch("../data.json")
.then((respuesta) => respuesta.json())
.then((json) => console.log(json));




function recorerStock(){
    
    let tdbody = document.getElementById("tdbody");
    
    fetch("../data.json")
    .then(respuesta => respuesta.json())
    .then(productos => {
        tdbody.innerHTML = ""
        productos.forEach( productos => {
            let td = document.createElement("tr")
            td.innerHTML = `
            <td data-title="#"> ${productos.id}</td>
            <td data-title="Codigo"> ${productos.codigo}</td>
            <td data-title="Producto"> ${productos.producto}</td>
            <td data-title="Cantidad"> ${productos.cantidad}</td>
            <td data-title="Precio"> $ ${productos.precio}</td>
            
            `
            tdbody.appendChild(td)
        })
    })
    .catch(producto => alertStorageVacio() )
   
}


verStock != null && verStock.addEventListener("click", recorerStock);