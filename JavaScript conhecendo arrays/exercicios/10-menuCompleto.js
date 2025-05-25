// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = ["Macarão", "Arroz", "Feijão", "Carne", "Frango"];
const menuDeSobremesas = ["Sorvete", "Tortas", "Chocolate"];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);
