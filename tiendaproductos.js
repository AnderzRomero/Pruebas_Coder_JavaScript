// 3.... Simulador Venta de productos

//Tienda Tecnologica

//clase Producto

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

// creamor 4 productos
const teclado = new Producto(1, 'Teclado Bluetooth', 65000)
const mouse = new Producto(2, 'MOUSE GAMING EXTREME 7 BOTONES', 27000)
const bluetooth = new Producto(3, 'adaptador Bluetooth y WIFI', 95000)
const audifonos = new Producto(4, 'Manos libres', 10000)

// guardamos los productos
const productos = [teclado, mouse, bluetooth, audifonos]
console.log(productos);

let productoEscogido = prompt('Escoge el producto que deseas comprar:  teclado, mouse, bluetooth, audifonos')
console.log(productoEscogido);

// variable para condicion del ciclo
let seguirComprando = true;
const carrito = []

while (seguirComprando === true) {
    console.log("entro al ciclo");
    //buscar el producto escogido
    const producto = productos.find(
        (producto) => producto.nombre === productoEscogido.toLowerCase().trim()
    );    
    console.log(producto.nombre);
    // guardar producto en carrito o preguntarle al usuario un producto existente
    if (producto != 0) {
        carrito.push(producto)
    } else {
        productoEscogido = prompt("Escoge un producto correcto: teclado-mouse-bluetooth-audifonos")
        continue
    }

    const decision = prompt('Deseas seguir comprando? si-no')
    if (decision === 'si') {
        productoEscogido = prompt('Escoge el producto que deseas comprar:  teclado-mouse-bluetooth-audifonos')
    } else {
        seguirComprando = false
    }
}

console.log(carrito);
let totalCompra = 0
// for (const producto of carrito) {
//      totalCompra = totalCompra + producto.precio
//}
carrito.forEach(producto=>{
    totalCompra = totalCompra+producto.precio
})
alert('El total de tu compra es:' + totalCompra);