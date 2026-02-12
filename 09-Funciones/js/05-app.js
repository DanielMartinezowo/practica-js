//clousure:
/* permite el anidamiento de funciones y que esta funcion anidada, tenga acesso a las variables de la 
funcion externa */
/* algo importante es dado que la funcion interna tiene acceso a al ambito de la funcion externa
esta tiene mas vida util que la funcion externa */

let pet = function(name){
    //funcion externa define la variable
    let getName = function(){
        return name;//tiene acceso a la variable de la funcion externa
    }
    return getName;//devuelve una funcion interna
}
    myPet = pet('queso');

    myPet()

    console.log(myPet())


