const notas = [10, 8.5, 5, 6.5, 8, 7.5];


//Primera expressão: Executada apenas uma vez
//Segunda expressão: Condição de parada
//Terceira expressão: Executada sempre no fnal do bloco
for(let indice = 0; indice < notas.length; indice++){
    console.log(indice + 1,"-", notas[indice]);
}