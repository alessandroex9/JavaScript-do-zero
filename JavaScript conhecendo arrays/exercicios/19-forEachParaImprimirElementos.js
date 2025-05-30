//Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const notas = [10, 6.5, 8, 7.5];

let indice = 0;

notas.forEach(function (nota) {
    indice = indice + 1;
    console.log(`${indice} - ${nota}`);
     
});