const numeros = [7, 3, 5, 4, 70, 60, 90, 33, 15, 8];

function somandoElementos(arr) {
    const somaNumeros = numeros.reduce((acumulador, numero)=> {
        return acumulador + numero;
    }, 0);
    return somaNumeros;
}

console.log(somandoElementos(numeros));