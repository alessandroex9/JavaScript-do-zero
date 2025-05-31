const numeros = [7, 3, 5, 4, 70, 60, 90, 33, 15, 8];


function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
}

console.log(filtraNumeros(numeros));
