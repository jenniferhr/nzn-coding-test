function findTargetInArray(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.round((leftIndex + rightIndex) / 2);

    if(array[middleIndex] === target) {
      return middleIndex;
    }

    if (array[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

module.exports = findTargetInArray