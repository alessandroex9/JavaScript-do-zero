//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const frase = "Olá Mundo!!!";

const comprimentoFrase = frase.length;
const fraseCaixaAlta = frase.toUpperCase();

console.log(`A frase é "${frase}"`);
console.log(`A frase em caixa alta "${fraseCaixaAlta}"`);
console.log(`A frase tem ${comprimentoFrase} de caracteres`);