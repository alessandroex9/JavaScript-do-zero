const lista1 = ["Alessandro", "Aline"];
const lista2 = ["Osvaldo", "Marinês"];


function juntandoListas (lista1, lista2) {
    return lista1.concat(lista2);
}

const listasJuntas = juntandoListas(lista1, lista2);

console.log(listasJuntas);