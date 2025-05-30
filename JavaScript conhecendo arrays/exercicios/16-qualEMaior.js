//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior.

const listaDeNumeros = [2,3];

function qualEMaior(listaDeNumeros) {
    if(listaDeNumeros[0] > listaDeNumeros[1]){
        console.log(`O menor número é ${listaDeNumeros[1]} e o maior número é ${listaDeNumeros[0]}.`);
    }
    else if (listaDeNumeros[0] < listaDeNumeros[1]) {
        console.log(`O menor número é ${listaDeNumeros[0]} e o maior número é ${listaDeNumeros[1]}.`);
    } else {
        console.log(`Nenhum número é maior.`);
    }
    
}

qualEMaior(listaDeNumeros);