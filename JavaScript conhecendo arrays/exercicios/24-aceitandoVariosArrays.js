//Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

const lista1= [1, 52, 5, 4, 856];
const lista2= [1, 5, 4, 7, 8];
const lista3= [14, 5, 78, 96];

function juntandoListas(array) {
    const novaLista = [...lista1, lista2, lista3];
    return novaLista;
}

console.log(juntandoListas(lista1, lista2, lista3));


function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const arraysConcatenados = concatArrays(arr1, arr2, arr3);
// console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6]