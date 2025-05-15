console.log(`\nTrabalhando com Condicionais`);

const listasDeDistinos = new Array(
    "Salvador", "São Paulo", "Rio de Janeiro", "Curitiba", "Porto Alegre", "Belo Horizonte",
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;


console.log("\nDestinos possíveis:");
console.log(listasDeDistinos);

// while(contador<6){
    
//     if(listasDeDistinos[contador] = destino){
//         console.log("Destino existe");
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }

for(let cont = 0; cont < 6; cont ++){    
    if(listasDeDistinos[cont] = destino){
        destinoExiste = true;
    }
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}
else{
    console.log("Desculpe tivemos em erro!");
}