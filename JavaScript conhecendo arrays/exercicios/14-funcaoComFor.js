//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const numeros = [1, 10, 50, 100, 80, 70, 30, 77];

function imprimirNumeros(arr){
    for (let i = 0; i < numeros.length; i++){

        console.log(i + 1, "-", arr[i]);
        
    }
}

imprimirNumeros(numeros);