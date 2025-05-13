console.log(`Trabalhando com listas`);

const listasDeDistinos = new Array(
    "Salvador", "São Paulo", "Rio de Janeiro", "Curitiba", "Porto Alegre",
);

console.log(listasDeDistinos);


listasDeDistinos.push("Belo Horizonte"); //Adicionar elementos na lista com push

console.log(listasDeDistinos);

listasDeDistinos.splice(1, 1); //Removendo elemento da Lista

console.log(listasDeDistinos);

console.log(listasDeDistinos[1], listasDeDistinos[3]); //Mostrar itens especifico