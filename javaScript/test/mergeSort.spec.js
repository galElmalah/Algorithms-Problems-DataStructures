const expect = require('chai').expect;
const { mergeSort, merge } = require('../Algorithms/sorting/mergeSort');
const { randomArray, isSorted } = require('../utills/arrays');

describe('Merge sort function', () => {
  it('Should return a sorted array in ascending order', () => {
    let testArray = randomArray(1000);
    testArray = mergeSort(testArray);
    expect(isSorted(testArray)).to.be.true;
  });

  it('Should return a sorted array in decreasing order', () => {
    let testArray = randomArray(1000);
    testArray = mergeSort(testArray).reverse();
    expect(isSorted(testArray, (a,b) => a >= b )).to.be.true;
  });

  it('Should return an empty array', () => {
    let testArray = [];
    testArray = mergeSort(testArray);
    expect(testArray.length).to.equal(0);
  });
})

describe('Merge function', () => {
  it('Should merge the two arrays', () => {
    let testArray = [1,2];
    let testArray2 = [3,4];
    expect(merge(testArray,testArray2).length).to.equal(4);
    expect(merge(testArray,testArray2).length).to.be.greaterThan(2);
  });

  it('Should return an empty array', () => {
    let testArray = [];
    let testArray2 = [];
    expect(merge(testArray,testArray2).length).to.equal(0);
  });

  it('Should merge the arrays in ascending order', () => {
    let testArray = [1,2];
    let testArray2 = [3,4];
    let merged = merge(testArray, testArray2)
    expect(isSorted(merged)).to.be.true;
  });

  it('Should have all the elements from both arrays', () => {
    let testArray = randomArray(10);
    let testArray2 = randomArray(10);
    let merged = merge(testArray, testArray2)
    testArray
      .concat(testArray2)
      .forEach(e => {
        expect(merged.includes(e)).to.be.true;
      })
  })

})