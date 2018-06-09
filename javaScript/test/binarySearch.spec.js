const expect = require('chai').expect;
const binarySearch = require('../Algorithms/searching/binarySearch');

describe('Binary search function', () => {
  it('Should find the number', () => {
    const testArray = [1,2,3,4,5,6,15,19];
    // 3. ASSERT
    expect(binarySearch(testArray,3)).to.be.true;
  });

  it('Should\'nt find the number', () => {
    const testArray = [1,2,4,5,6,15,19];
    // 3. ASSERT
    expect(binarySearch(testArray,3)).to.be.false;
  })
});