console.log(`Trabalhando com Condicionais`);

const listasDeDistinos = new Array(
    "Salvador", "São Paulo", "Rio de Janeiro", "Curitiba", "Porto Alegre", "Belo Horizonte",
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos possíveis:");
console.log(listasDeDistinos);


//Condicional
// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");

//     listasDeDistinos.splice(1,1);
// }
// else{
//     //A pessoa é menor de idade
//     if(estaAcompanhada){
//         console.log("Comprador menor de idade acompanhado");
//         listasDeDistinos.splice(1,1);
//     }
//     else{
//         console.log("Não é maior de idade e não pode comprar");
//     }  
// }

//console.log(listasDeDistinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

//Operadores lógicos encadeados
if(
    idadeComprador >= 18 ||
    estaAcompanhada == true
){
    listasDeDistinos.splice(1,1);
    console.log("Comprado, Boa viagem!")
}
else{
    console.log("Não é maior de idade e não pode comprar");
} 

console.log(listasDeDistinos);

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada
){
    console.log("Embarcado, Boa viagem!")
}else{
    console.log("Você não pode embarcar!")
}