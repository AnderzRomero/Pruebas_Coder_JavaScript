const botonBuscar = document.querySelector('#botonBuscar')
const lista = document.querySelector('#lista')

//.then .catch
botonBuscar.onclick = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then((resp) => resp.json())
        .then((resp) => {
            const personajes = resp.results
            // console.log(personajes);
            personajes.forEach(pers => {
                const li = document.createElement('li')
                li.innerHTML = `<h3>${pers.name}</h3>
                <img src=${pers.image}>
                <p>${pers.species}</p>`
                lista.append(li)
            })
        })
        .catch((e) => console.log(e));
}

// ASYNC AWAIT

