//parâmentros/argumentos
//retorno


//hoisting

function exibeInfosEstudante(estudante, nota){
    return (`O nome é ${estudante} e a nota é ${nota}.`);
    
};

console.log(exibeInfosEstudante("Alessandro", 10));
console.log(exibeInfosEstudante("Ana", 8));
console.log(exibeInfosEstudante("Carlos", 5));

// declaração da função
function somarDoisNumeros(numA, numB) {
 return numA + numB;
}

// execução (ou chamada) da função
somarDoisNumeros(2, 2);

// atribuindo o retorno de uma função a uma variável
const resultado = somarDoisNumeros(2, 2);
console.log(resultado);