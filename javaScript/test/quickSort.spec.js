const expect = require('chai').expect;
const quickSort = require('../Algorithms/sorting/quickSort');
const { randomArray, isSorted } = require('../utills/arrays');

describe('Quick sort function', () => {
  it('Should return a sorted array in ascending order', () => {
    let testArray = randomArray(1000);
    
    testArray = quickSort(testArray);
    expect(isSorted(testArray)).to.be.true;
  });

  it('Should return a sorted array in decreasing order', () => {
    let testArray = randomArray(1000);
    testArray = quickSort(testArray).reverse();
    expect(isSorted(testArray, (a,b) => a >= b )).to.be.true;
  });

  it('Should return an empty array', () => {
    let testArray = [];
    testArray = quickSort(testArray);
    expect(testArray.length).to.equal(0);
  });
})