let arrayCarrito = [];

class ProductoCarrito
{

   constructor(nombre, precio, imagen, id, subtotal)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = 1
        this.id = id;
        this.subtotal = precio;
        
    }

 }



    fetch('./listadoProductos.JSON')
        .then((res) => res.json())
        .then(listadoProductos => {
            console.log(listadoProductos);
            rellenarIndex(listadoProductos);
            initCarritoEvents()
        })

let divContainer = document.getElementById('row');
const lista = document.getElementById('row');

function rellenarIndex(arrayProductos) 
{
    const lista = document.getElementById('row');
    arrayProductos.forEach(producto => {
        let div = document.createElement('div');
        div.classList = 'col-4 mt-3 img-fluid'
        
        div.innerHTML = `
        <div class= "card img-fluid" style="width: 18rem;">
                <img src= "${producto.imagen}" class="card-img-top" alt="${producto.id}">
                <div class ="card-body">
                     <h5 class="card-title">${producto.nombre}</h5>
                     <p class=card-text">$ <strong>${producto.precio}</strong></p>
                     <button class="btn btn-success anadirCarrito"> Add to ShopCart</button>
                </div>
         </div>`
        divContainer.appendChild(div);
    })
    let carritoLocalStorage = JSON.parse(localStorage.getItem('arrayCarrito'))
    if (carritoLocalStorage) {
        carritoNav(carritoLocalStorage)
    }
}

function initCarritoEvents()
{
    let botones = document.querySelectorAll('.anadirCarrito');
    botones.forEach(elemento => {
        elemento.addEventListener('click', anadirCarrito)
    })
  
}

function anadirCarrito(e)
{
    let carritoLocalStorage = JSON.parse(localStorage.getItem('arrayCarrito'));

    carritoLocalStorage ? arrayCarrito = carritoLocalStorage : "" //operador ternario

    let index = arrayCarrito.findIndex(producto => producto.id == e.target.parentNode.parentNode.children[0].alt)
    
    console.log(index);
    console.log(arrayCarrito);

  let nombre = e.target.parentNode.children[0].innerText
  let precio = e.target.parentNode.children[1].children[0].innerText
  let imagen = e.target.parentNode.parentNode.children[0].src
  let id = e.target.parentNode.parentNode.children[0].alt
  
  if (index == -1) {
    const producto = new ProductoCarrito(nombre, precio, imagen, id)
    arrayCarrito.push(producto)
  } else {
    arrayCarrito[index].cantidad++
    arrayCarrito[index].subtotal =
      arrayCarrito[index].precio * arrayCarrito[index].cantidad
  }
  localStorage.setItem('arrayCarrito', JSON.stringify(arrayCarrito))
  if (carritoLocalStorage) {
    carritoNav(carritoLocalStorage)
}
  carritoNav(arrayCarrito)
}

function carritoNav(arrayCarrito) {
  let textoCarrito = document.getElementById('anchor_carrito')

  let totalProductos = 0

  for (let producto of arrayCarrito) {
    totalProductos += producto.cantidad
  }
  textoCarrito.innerHTML = ''
  textoCarrito.innerHTML = `<p>ShopCart 
    (${totalProductos})</p>`
}

    