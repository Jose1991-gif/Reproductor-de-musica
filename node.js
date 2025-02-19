// pedimos la informacion al servidor con axios el protocolo es http
axios.get("https://api.institutoalfa.org/api/songs")
// cuando la informacion esta lista se activa el .then
// la funcion recibe una respuesta que puedo manejar
    .then(function(respuesta){
        // mostrar por consola
        console.log(respuesta)

        // guardo en canciones lo que venga la respuesta
        const canciones = respuesta.data.songs

        // map mapea, recorre o descompone las canciones
        canciones.map(function (cancion) {

            console.log(cancion.title)
            document.getElementById('targetas').appendChild(CrearComponenteCancion(cancion))

        })
    }) 

function CrearComponenteCancion(songs) {
    const div = document.createElement('div')
    div.setAttribute('class', 'lulo')

    div.innerHTML = `
        <img src="" alt="">
    
        <div>
          <h3>${songs.title}</h3>
           <p>${songs.author}</p>
      </div>
          
    `

    return div
}

console.log(CrearComponenteCancion(cancion))

document.getElementById('targetas').appendChild(CrearComponenteCancion(cancion))


