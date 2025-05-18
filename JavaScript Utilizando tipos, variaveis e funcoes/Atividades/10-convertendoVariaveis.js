//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

const string = "3";
const number = 3;

const stringParaNumber = Number(string);
const numberParaString = String(number);

console.log(typeof(stringParaNumber), typeof(numberParaString));