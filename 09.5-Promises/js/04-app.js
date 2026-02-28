//ejercicios propuestos 
//3er ejercicio: correr todo sincrono
const espera = (ms) => new Promise(resolve =>setTimeout(resolve,ms))


async function sincrono(){
    let persona = "Juanito"
    console.log("este es el amigo "+ persona)
    let edad = 23
    console.log("el piensa que tiene " + edad )

   await espera(10000)
   console.log("esperando")
    console.log(`operacion finalizada tienes ${edad} años`)
}

sincrono()