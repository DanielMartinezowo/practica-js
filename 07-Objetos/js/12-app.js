//iteracion de objetos ejercicio 1
    const objetos = {
        fruta : 'manzana',
        animal : 'mono',
        clima : 'nublado'
    };
    const reemplazoClaves = {
        animal : 'animal',
        clima : 'weather',
        fruta : 'fruit'
    };
    
    /*const objetosTraducidos = Object.entries(objetos).reduce((nuevoObj, [clave, valor]) => {
        const nuevaClave = reemplazoClaves[clave];
        nuevoObj[nuevaClave] = valor;

        return nuevoObj;
    }, {});
    console.log(objetosTraducidos);*/

    const ejemploTranslate = {};

    Object.keys(objetos).forEach((objetosEsp) => {
        const nuevoObj  = reemplazoClaves [objetosEsp];
        ejemploTranslate[nuevoObj] = objetos [objetosEsp];
    });

    console.log(ejemploTranslate);
