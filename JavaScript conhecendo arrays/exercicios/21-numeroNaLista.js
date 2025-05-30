//Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const numero = 100;
let posicao = -1

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === numero){
        posicao = i;
        break;
    }
}

console.log(`Posição do número ${numero}: ${posicao}`);