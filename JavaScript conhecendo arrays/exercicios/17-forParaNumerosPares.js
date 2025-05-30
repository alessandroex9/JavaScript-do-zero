//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let indice = 0; indice < numeros.length; indice++){
    if (numeros[indice] % 2 === 0){
       console.log(`${numeros[indice]} é par`); 
    }
};