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
    div.setAttribute('class', 'card')

    div.innerHTML = `
        <img src="${songs.image.url}" alt="">
    
        <h2>${songs.title}</h2>
         <p>${songs.author}</p>
        
          
    `
    div.addEventListener("click", function() {
        console.log(songs.title)
        // esto va pasar cuando el usuario haga click
        document.getElementById("audio")
            .setAttribute("src", songs.audio.url)

        document.getElementById("hola")
        .setAttribute("src",songs.image.url )


        // document.getElementById("title").innerHTML = songs.title
    })

    return div
}



const audio = document.getElementById("audio")

document.getElementById("pausa").addEventListener("click", function(){
    console.log("click en pausa")
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
})


