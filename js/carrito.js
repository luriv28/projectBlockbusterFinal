const carrito = JSON.parse(localStorage.getItem("arrayCarrito"));
const totalDiv = document.getElementById('totalCarrito');

let tbody = document.querySelector("#tbody");

function rellenarCarrito(arrayCarrito){
    for(let producto of arrayCarrito){
        
        let row = document.createElement("tr");
        row.innerHTML = `<td><img src='${producto.imagen}'width="200px"</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td><button id="${producto.id}"class="btn btn-primary plus">+</button><p id='${producto.id}' class='quantity'>${producto.cantidad}</p> 
           <button id="${producto.id}" class="btn btn-primary minus" >-</button></td>
        <td id='${producto.id}' class='subtotal'>${producto.subtotal}</td>
        <td><button id="${producto.id}"class="btn btn-danger eliminarProducto">Eliminar</button></td>`


        tbody.appendChild(row);
    }
      totalDiv.innerHTML = 'Total'

    calcularTotal(carrito)

}

rellenarCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminarProducto");

botonesEliminar.forEach(elemento =>{
    elemento.addEventListener("click", eliminarProducto)
});



function eliminarProducto(e){
    let index = carrito.findIndex(producto => producto.id == e.target.id)

    carrito.splice(index, 1);

    e.target.parentNode.parentNode.remove();

    localStorage.setItem("arrayCarrito", JSON.stringify(carrito));
    totalDiv.innerHTML = 'Total'

    calcularTotal(carrito)
}

function calcularTotal (carrito) {

    if (carrito) {
         
    let carritoCopy = [...carrito] // Esto se hace para no actuar directamente sobre el array real
    console.log(carritoCopy);
    let total = []
    for(let producto of carritoCopy){
        total.push(producto.subtotal)
        
    }
    if (total.length){
    const finalTotal = total.reduce((a, b) => parseInt(a) + parseInt(b))
    console.log(finalTotal);
    totalDiv.innerHTML += `: $${finalTotal}`
    }
    } else {
        totalDiv.innerHTML = 'Total'
    }
  

}

const buttonVariatons = () =>{

    const sumButtons = document.querySelectorAll(".plus");
    const restButtons = document.querySelectorAll(".minus");
    const quantityTd = document.querySelectorAll('.quantity')
    const subtotalTd = document.querySelectorAll('.subtotal')
    sumButtons.forEach(btn => {
        btn.addEventListener('click',()=> {
            carrito.forEach((producto)=>{
                if (btn.id == producto.id){
                    producto.cantidad++
                    producto.subtotal = producto.cantidad * producto.precio
                    quantityTd.forEach((qt) => {
                        if (qt.id == btn.id) {
                            qt.innerHTML = producto.cantidad
                    }
                    subtotalTd.forEach((st) => {
                        if (st.id == btn.id) {
                            console.log('entra');
                            st.innerHTML = producto.subtotal 
                    }
                    })
                    })
                    
                }
                
            })
            localStorage.clear();
            localStorage.setItem('arrayCarrito', JSON.stringify(carrito))
    
        })
     })
    // REST FEATURE
    restButtons.forEach(btn => {
        btn.addEventListener('click',()=> {
            carrito.forEach((producto)=>{
                if (producto.cantidad > 0) {
                     if (btn.id == producto.id){
                    producto.cantidad--
                    producto.subtotal = producto.cantidad * producto.precio
                    quantityTd.forEach((qt) => {
                        if (qt.id == btn.id) {
                            qt.innerHTML = producto.cantidad
                    }
                    subtotalTd.forEach((st) => {
                        if (st.id == btn.id) {
                            console.log('entra');
                            st.innerHTML = producto.subtotal 
                    }
                    })
                    })
                    
                }
                } else {
                    // ACÁ VA EL FILTRO
                    if (btn.id == producto.id){
                      let newCarrito =   carrito.filter((prodToDelete) => {
                                            prodToDelete.id != btn.id
                     })
                     console.log(newCarrito);
                        
                     }
                   
                }
               
                
            })
            localStorage.clear();
            localStorage.setItem('arrayCarrito', JSON.stringify(carrito))
    
        })
     })
    
    
     
    
    
    
    
    
    
    }
    buttonVariatons();