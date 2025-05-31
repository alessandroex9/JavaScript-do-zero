const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const somaDosNumeros = numeros.reduce((acumulador, numero)=> acumulador + numero, 0);

console.log(somaDosNumeros);



function calculaMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota)=> {
        return acumulador + nota;
    }, 0);
    const media = somaDasNotas / listaDeNotas.length;
    return media;
}