describe('Testing the function findTargetInArray', () => {
  it('Should return index of target number when it is in the middle of the array', () => {
    let testArray = [1, 3, 4, 5, 6, 8, 9];
    let testTarget = 5;
    let testTargetIndex = 3;

    const result = findTargetInArray(testArray, testTarget);

    expect(result).toBe(testTargetIndex);
  });

  it('Should return index of target number when it is in the end of the array', () => {
      let testArray = [20, 30, 40, 50, 60];
      let testTarget = 60;
      let testTargetIndex = 4;

      const result = findTargetInArray(testArray, testTarget);

      expect(result).toBe(testTargetIndex);
  });

  
  it("Should return -1 if target number doesn't exist in the array", () => {
    let testArray = [11, 13, 15, 17, 19];
    let testTarget = 10;

    const result = findTargetInArray(testArray, testTarget);

    expect(result).toBe(-1);
  });
});