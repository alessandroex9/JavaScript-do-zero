const estudante = "Caroline";
const docente = "Ana";
const cumprimento = "Nosso lema é 'Estudar bastante!'";
const citacao = `Ju diz: "Nosso lema é 'Estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log(`A estudante chama ${estudante}`); //Template string

const senha = "SenhaSegura123" + estudante.toUpperCase();

console.log(senha);


//Caracteres Especiais
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)