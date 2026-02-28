//ejercicios propuestos 
//1er ejercicio: correr todo sincrono

function sincrono(){
    let persona = "Juanito"
    console.log("este es el amigo "+ persona)
    let edad = 23
    console.log("el piensa que tiene " + edad )
    setTimeout(() => {
        console.log("hay que esperar, espera, ya casi")
    }, 10000);
    console.log(`operacion finalizada tienes ${edad} años`)
}

sincrono()