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

let productoEscogido = parseInt(prompt('Escoge el producto que deseas comprar:  1.teclado - 2.mouse - 3.bluetooth - 4.audifonos'));
// variable para condicion del ciclo
let seguirComprando = true;
const carrito = []

while (seguirComprando === true) {
    //buscar el producto escogido
    let producto = productos.find((producto => producto.id === productoEscogido));
    // guardar producto en carrito o preguntarle al usuario un producto existente
    if (producto) {
        carrito.push(producto)
    } else {
        productoEscogido = parseInt(prompt('Escoge el producto que deseas comprar:  1.teclado - 2.mouse - 3.bluetooth - 4.audifonos'));
        continue
    }

    const decision = prompt('Deseas seguir comprando? si-no')
    if (decision === 'si') {
        productoEscogido = parseInt(prompt('Escoge el producto que deseas comprar:  1.teclado - 2.mouse - 3.bluetooth - 4.audifonos'));
    } else {
        seguirComprando = false
    }
}
let nomProducto = [];
let totalCompra = 0
// for (const producto of carrito) {
//      totalCompra = totalCompra + producto.precio
//}
carrito.forEach(producto => {
    nomProducto.push(producto.nombre)
    totalCompra = totalCompra + producto.precio
})
console.log(nomProducto);
alert(`El total de tu compra es:  $ ${totalCompra} \n 
los productos comprados fueron: \n ${nomProducto}`);
