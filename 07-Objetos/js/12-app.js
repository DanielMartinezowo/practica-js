//iteracion de objetos ejercicio 1
    const objetos = {
        fruta : 'manzana',
        animal : 'mono',
        clima : 'nublado'
    };
    const reemplazo = {
        manzana : 'apple',
        mono : 'monkey',
        nublado : 'cloudy'
    };
    const objetosTraducidos = Object.entries(objetos).reduce((nuevoObj, [clave, valorEsp]) => {

        nuevoObj[clave] = reemplazo[valorEsp];
        return nuevoObj;
    }, {});

    console.log(objetosTraducidos);
