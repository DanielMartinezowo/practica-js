//ejercicios propuestos 
//2do ejercicio: correr todo asincrono de modo que timeout se loguee hasta el final

async function asincrononono () {
    let persona = "ludobico"
    console.log(`este chavo se llama ${persona}`)
    let edad = 33
    console.log(`el dice tener ${edad} años`)

    setTimeout(() => {
        console.log("esto se va a ejecutar, no ahorita, pero lo hara jeje")
    },  3000);

    console.log("ya acabo, es todo")
}
asincrononono()