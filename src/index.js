function findTargetInArray(array, target) {
  // primeiro, definimos os índices das extremidades do array
  // o índice da esquerda é 0, pois esse é o índice do primeiro item de qualquer array, 
  // e o da direita é o índice do último item da array, que descobrimos diminuindo
  // o valor do comprimento do array por 1
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  // enquanto o índice da direita ainda é maior ou igual ao da esquerda, o alvo ainda pode 
  // estar dentro do array
  while (leftIndex <= rightIndex) {
    // calculamos o índice do meio do array dividindo a soma do
    // índice esquerdo e direito por 2
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    // se o índice do meio do array for igual ao número alvo, retornamos esse
    // índice, e a função termina
    if(array[middleIndex] === target) {
      return middleIndex;
    }

    // se o índice do meio do array for maior que o alvo, significa que
    // o alvo está na metade à esquerda do array, portanto a extremidade
    // direita passa a ser um número antes do índice do meio
    // caso contrário, o alvo está à direita do array, e a extremidade esquerda
    // passa a ser um número depois do índice do meio
    if (array[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

 // se o alvo não está na função, o loop while termina, e a função retorna -1
  return -1;
}

module.exports = findTargetInArray