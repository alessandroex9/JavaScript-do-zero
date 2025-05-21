let saldo = 5000;
const deposito = 1000;
const saque = 1500;
let operacao;

console.log(`Você tem R$${saldo} na sua conta.`);
operacao = saldo + deposito;
console.log(`Você está depositando R$${deposito}.`);
console.log(`Saldo R$${operacao}.`);

operacao = operacao - saque;
console.log(`Você está saquando R$${saque}.`);
console.log(`Saldo R$${operacao}.`);
console.log("Fim!");