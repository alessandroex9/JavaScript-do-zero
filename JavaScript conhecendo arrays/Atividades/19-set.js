const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes);
//Set não é uma Array ele é tipo. sendo assim não dá para usar as funções das lista nele.

//Para transformar em um array.
const listaNomesAtualizados = [...nomesAtualizados];

console.log(nomesAtualizados);
console.log(listaNomesAtualizados);

