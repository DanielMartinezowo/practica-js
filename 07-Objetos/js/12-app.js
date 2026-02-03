//iteracion de objetos ejercicio 1
    const objetos = {
        fruta : 'manzana',
        animal : 'mono',
        clima : 'nublado'
    };
    const reemplazoClaves = {
        fruta : 'fruit',
        animal : 'animal',
        clima : 'weather'
    };
    const objetosTraducidos = Object.entries(objetos).reduce((nuevoObj, [clave, valor]) => {
        const nuevaClave = reemplazoClaves[clave];
        nuevoObj[nuevaClave] = valor;

        return nuevoObj;
    }, {});

    console.log(objetosTraducidos);
