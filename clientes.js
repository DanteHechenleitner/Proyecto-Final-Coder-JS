const guardarCliente = document.getElementById("guardarCliente")
const cliente = document.getElementById("clientes")
const cuit = document.getElementById("cuit")
const clienteInput = document.getElementById("clienteInput")
const cuitInput = document.getElementById("cuitInput")

let iniciar = document.getElementById("exampleModa4")


function crearIDcientes(){
    let contador = JSON.parse(localStorage.getItem("Clientes"))
    let creadId = contador == null ? contador = 0 : contador.length 

    return creadId
}

class Clientes{
    constructor(id,cliente, cuit){
        this.id = id
        this.cliente = cliente
        this.cuit = cuit
    }
}

let buscar = JSON.parse(localStorage.getItem("Clientes")) ?? []
const clientesEnStorage = JSON.parse(localStorage.getItem("Clientes")) ?? []



function agregarClientes(){
    const id = crearIDcientes() + 1
    let buscarclientes = buscar.some((e) => e.cliente == cliente.value)
    let buscarCuit = buscar.some((e) => e.cuit == cuit.value)

    if(cliente.value == "" || cuit.value == ""){
        Swal.fire('Por favor completar todos los campos')
    }else if(buscarclientes == true || buscarCuit == true){
        Swal.fire('El Cliente ya esta existe')
    }
    else{
        const nuevoCliente = new Clientes(id, cliente.value , cuit.value);
        clientesEnStorage.push(nuevoCliente);
        let enJASON = JSON.stringify(clientesEnStorage);
        localStorage.setItem("Clientes", enJASON);
        alertGuardado();
        cliente.value = ""
        cuit.value = ""
    }

    
    
    
}


function buscarClientes(){
       
    let buscarclientes = buscar.some((e) => e.cliente == clienteInput.value)
    if( buscarclientes == true){
        //console.log(buscar.filter((e) => e.cliente == clienteInput.value))
       console.log(buscar.filter((e) => e.cliente == clienteInput.value).map((e) => e.cuit))
       let mostrar = buscar.filter((e) => e.cliente == clienteInput.value).map((e) => e.cuit)
       cuitInput.innerText = mostrar
    }
}


guardarCliente != null && guardarCliente.addEventListener("click", agregarClientes)

clienteInput.addEventListener("keyup", buscarClientes)