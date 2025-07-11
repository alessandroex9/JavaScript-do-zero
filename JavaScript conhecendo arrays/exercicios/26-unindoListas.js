//Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

//Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

const cores = concatArrays(coresLista1, coresLista2);

const coresAtualizados = new Set(cores);
const listaDeCoresAtualizada = [...coresAtualizados];

console.log(coresAtualizados);
