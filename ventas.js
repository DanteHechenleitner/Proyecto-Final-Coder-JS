/*let formulario = document.getElementById("formulario");
let verStock = document.getElementById("verStock");

let iva = document.getElementById("iva");
let contenedorIva = document.getElementById("contenedorIva");
////
let codigo = document.getElementById("codigo");
let producto = document.getElementById("producto");
let cantidad = document.getElementById("cantidad");
let precio = document.getElementById("precio");
////
;
let valorTotal = document.getElementById("valorTotal")
let agregarFila = document.getElementById("agregarFila")
let total = document.getElementById("total")
let cotizacion = document.getElementById("cotizacion")*/

let guardarProducto = document.getElementById("guardar");
//let valorTotal = document.getElementById("valorTotal")


function agregarColumnas(){
    let columnaCodigo = document.createElement("div");
    columnaCodigo.classList.add("col-md-2")
    let labelCodigo = document.createElement("label")
    labelCodigo.innerText = "Codigo"
    let inputCodigo = document.createElement("input");
    inputCodigo.classList.add("form-control")
    inputCodigo.setAttribute("id","codigo")
    inputCodigo.setAttribute("type","text")
    columnaCodigo.appendChild(labelCodigo)
    columnaCodigo.appendChild(inputCodigo)
  

    let columnaProducto = document.createElement("div");
    columnaProducto.classList.add("col-md-3")
    let labelProducto = document.createElement("label")
    labelProducto.innerText = "Producto"
    let inputProducto = document.createElement("input");
    inputProducto.classList.add("form-control")
    inputProducto.setAttribute("id","producto")
    inputProducto.setAttribute("type","text")
    columnaProducto.appendChild(labelProducto)
    columnaProducto.appendChild(inputProducto)
  
    

    let columnaCantidad = document.createElement("div");
    columnaCantidad.classList.add("col-md-1")
    let labelCantidad = document.createElement("label")
    labelCantidad.innerText = "Cantidad"
    let inputCantidad = document.createElement("input");
    inputCantidad.classList.add("form-control")
    inputCantidad.setAttribute("min",0)
    inputCantidad.setAttribute("id","cantidad")
    inputCantidad.setAttribute("type","number")
    columnaCantidad.appendChild(labelCantidad)
    columnaCantidad.appendChild(inputCantidad)


    let columnaPrecio = document.createElement("div");
    columnaPrecio.classList.add("col-md-1")
    let labelPrecio = document.createElement("label")
    labelPrecio.innerText = "Precio"
    let inputPrecio = document.createElement("input");
    inputPrecio.classList.add("form-control")
    inputPrecio.setAttribute("min",0)
    inputPrecio.setAttribute("id","precio")
    inputPrecio.setAttribute("type","number")
    columnaPrecio.appendChild(labelPrecio)
    columnaPrecio.appendChild(inputPrecio)


    let columnnaIva = document.createElement("div");
    columnnaIva.setAttribute("id", "contenedorIva")
    columnnaIva.classList.add("col-md-1")
    let labelIva = document.createElement("label")
    labelIva.classList.add("form-label")
    labelIva.innerText = "IVA"
    let selectIva = document.createElement("select")
    selectIva.classList.add("form-control")
    selectIva.innerHTML = `
        <option></option>
        <option>10.5</option>
        <option>21</option>
        <option>Exento</option>
    `
    columnnaIva.appendChild(labelIva)
    columnnaIva.appendChild(selectIva)
 

    let columnaTotal = document.createElement("div");
    columnaTotal.classList.add("col-md-2")
    columnaTotal.innerHTML = `
    <label for="total" class="form-label">Total</label>
    `
    let labelTotal = document.createElement("label")
    labelTotal.classList.add("form-label", "form-control")
    labelTotal.innerText = "0"
    labelTotal.setAttribute("id", "valorTotal")
    columnaTotal.appendChild(labelTotal)


    let botonBorrar = document.createElement("button")
    botonBorrar.classList.add("col-md-1", "botonBorrar")
    botonBorrar.setAttribute("id", "botonBorrar")
    botonBorrar.setAttribute("type", "button")
    botonBorrar.innerHTML= `
    <img src="../media/borrar.png" >
    `   

    formulario.appendChild(columnaCodigo)
    formulario.appendChild(columnaProducto)
    formulario.appendChild(columnaCantidad)
    formulario.appendChild(columnaPrecio)
    formulario.appendChild(columnnaIva)
    formulario.appendChild(columnaTotal)
    formulario.appendChild(botonBorrar)
    

    botonBorrar.addEventListener("click", () => eliminarFilla(columnaCodigo, columnaProducto, columnaCantidad,columnaPrecio, columnnaIva, columnaTotal, botonBorrar))
 
    selectIva.addEventListener("change", () => sumarIva(inputCantidad,inputPrecio,selectIva,labelTotal))
    
    
}



function numeroCotizacion(){
   cotizacion.innerText = "CTN" + (1 + productosEnStorage.length)
}



function eliminarFilla(codigo, producto,cantidad, precio,iva, total, boton){
    Swal.fire({
        title: 'Estas seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            codigo.remove()
            producto.remove()
            cantidad.remove()
            precio.remove()
            iva.remove()
            total.remove()
            boton.remove()
          Swal.fire(
            'Eliminada.',
            'La fila fue eliminada.',
            'success'
          )
        }
    })
}



function sumarIva(cantidad,precio,iva, total){
    if(cantidad.value != "" && precio.value != ""){   
        total.innerHTML = `
        $ ${(cantidad.value * precio.value)*  ( 1 + (iva.value/100)) }
        `
    }
    
    if(iva.value === "Exento"){
        total.innerHTML = `
        $ ${(cantidad.value * precio.value)}
        `
    }
    
}





/// creo un bucle para poder contar el array y generar los ID

function crearID(){
    let contador = JSON.parse(localStorage.getItem("Producto"))
    let creadId = contador == null ? contador = 0 : contador.length 

    return creadId
}

//// Se crea la Clase Producto para poder crear con New nuevos productos

class Productos{
    constructor(id, codigo, producto, cantidad, precio){
        this.id = id;
        this.codigo = codigo;
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;

    }
}

// JS Librerias

function alertGuardado(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Guardado',
        showConfirmButton: false,
        timer: 1500
    })
}

// JS Librerias

function alertStorageVacio(){
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'No hay productos para mostrar',
        showConfirmButton: false,
        timer: 1500
    })
}

 

const productosEnStorage = JSON.parse(localStorage.getItem("Producto")) ?? []


//// crear los arry del formulario

function Arrays(valor){
    let array = new Array
    if(valor.length > 0){
        for (elemnto of valor){
            array.push(elemnto.value)
            
        }
        return array
    }else{
        return valor.value
    }
}




/// Creo la funcion la cual al hacer click me guarde los producotos en el Storage

function agregarProductos(){
    const id = crearID() + 1;

    console.log(codigo.length)

   
    let arrayFormulario = [Arrays(codigo), Arrays(producto),Arrays(cantidad), Arrays(precio)]

    let largo = arrayFormulario[0].length 
    
    if(arrayFormulario.includes("") == true){
        Swal.fire('Por favor completar todos los campos')

    } else if(largo == 1 ){

        let nuevoProducto = new Productos(id, codigo.value, producto.value, cantidad.value, precio.value);
        productosEnStorage.push(nuevoProducto);
        let enJASON = JSON.stringify(productosEnStorage);
        localStorage.setItem("Producto", enJASON);
        formulario.reset();
        alertGuardado();
     

    }else if(Arrays(codigo).some(e => e == "") == true || Arrays(producto).some(e => e == "") == true || Arrays(cantidad).some(e => e == "") == true || Arrays(precio).some(e => e == "") == true){
        Swal.fire('Por favor completar todos los campos')

    }
    else{

        for (let index = 0; index < largo; index++) {
            let codigos = arrayFormulario[0].shift()
            let productos = arrayFormulario[1].shift()
            let cantidades = arrayFormulario[2].shift()
            let precios = arrayFormulario[3].shift()
            
            let nuevoProducto = new Productos(id, codigos, productos, cantidades, precios);
            productosEnStorage.push(nuevoProducto);
            let enJASON = JSON.stringify(productosEnStorage);
            localStorage.setItem("Producto", enJASON);
            formulario.reset();
            alertGuardado();
           
            
            
        }
       
    }
    
    
    

}




agregarFila != null && agregarFila.addEventListener("click", agregarColumnas);

guardarProducto != null && guardarProducto.addEventListener("click", agregarProductos);

iva != null &&  iva.addEventListener("change", () => sumarIva(cantidad,precio,iva,valorTotal))

numeroCotizacion()