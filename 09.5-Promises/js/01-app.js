/* promises es un objeto que representa la terminación 
o el fracaso de una operación asíncrona */

fetch ("https://jsonplaceholder.typicode.com/users")
    .then (Response => Response.json())
    .then (users =>{
        users.forEach(user => console.log(user.name))

        return users
    })
    .then(emails => {
        //  Usamos map para extraer nombres y emails (aplicando lo que se ha visto antes)
        const emaiList = emails.map(email => ({
        correo: email.email
        }))
        
        console.log(emaiList)
    })
    .catch(error => console.error("Fallo conexion", error))
    
