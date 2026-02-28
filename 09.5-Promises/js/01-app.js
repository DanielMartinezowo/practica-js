/* promises es un objeto que representa la terminación 
o el fracaso de una operación asíncrona */

/* fetch ("https://jsonplaceholder.typicode.com/users")
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
     */
    async function obtenerUsuarios() {
        try {
            const response = await fetch ("https://jsonplaceholder.typicode.com/users")
            const users = await response.json()
            users.forEach(user => console.log(user.name))
            const emaiList = users.map(u => ({ correo : u.email})
            )
            console.log(emaiList)
        } catch (error) {
            console.error("Fallo conexion", error)
        }
    }
obtenerUsuarios()