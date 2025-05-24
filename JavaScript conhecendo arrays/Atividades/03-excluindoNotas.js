const notas = [10, 6, 8, 5.5, 10];

console.log(notas);
notas.pop();//Remove o último elemento da nota
console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;


console.log(media.toFixed(2));