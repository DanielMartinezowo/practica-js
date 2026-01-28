//funciones dentro de objetos, importante el uso de this dentro de la funcion

const musica = {
    nombre : 'kiss me',
    artista : 'dpr live',
    categoria : 'rnb',
    accion: function(){
        console.log(`en reproduccion : ${this.nombre} de: ${this.artista}`);
    }
}

musica.accion();
