// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

const minhaLista = [];
minhaLista.push(1);
minhaLista.push(2);
minhaLista.push(3);

const primeiroElemento = minhaLista[0] * 2;

minhaLista[0] = primeiroElemento;

console.log(minhaLista);