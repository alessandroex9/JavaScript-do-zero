const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let soma = 0;

for (let indice = 0; indice < numeros.length; indice++){
    soma += numeros[indice];
};

const media = soma / numeros.length;
console.log('Array:', numeros);
console.log('Média dos números:', media);