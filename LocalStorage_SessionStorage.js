// Guardar Informacion en Storage
//setItem()
// localStorage.setItem('nombre','anderson')
// localStorage.setItem('edad','30')
// localStorage.setItem('esCasado','true')
// sessionStorage.setItem('apellido','romero')

// buscar informacion en Storage
// getItem()
// const nombre = localStorage.getItem('nombre')
// const edad = localStorage.getItem('edad')
// const esCasado = localStorage.getItem('esCasado')
// console.log(nombre, edad, esCasado);


// //eliminar informacion en storage
// // removeItem
// localStorage.removeItem('edad')

// //eliminar todo el storage
// // clear
// //localStorage.clear()

// //length
// console.log(localStorage.length);
// console.log(sessionStorage.length);

// //key
// console.log(localStorage.key(0));

// for(let i=0; i<localStorage.length; i++){
//     console.log(localStorage.key(i));
// }

// const infoUsuarios = {
//     edad:40,
//     esCasado:true,
//     nombre:'Claudio'
// }
// localStorage.setItem('infoUsuarios', infoUsuarios)
// // para comvertir y desconvertir en formato JSON
// //JSON.parse() -- JSON.stringify()

// Convertir a JSON
//primero convertimos a formato JSON con JSONstringify()
// const infoUsuariosJSON = JSON.stringify(infoUsuarios)
// console.log(infoUsuariosJSON);
//luego guardamos la informacion en el storage
// localStorage.setItem('infoUsuariosJSON', infoUsuariosJSON)

// Convertir JSON a JS
//primero traemos la informacion del storage
const infoUsuarioStorage = localStorage.getItem('infoUsuariosJSON')
console.log(infoUsuarioStorage);
//luego la convertinos de formato JSON a JS con JSON.parse()
console.log(JSON.parse(infoUsuarioStorage));
