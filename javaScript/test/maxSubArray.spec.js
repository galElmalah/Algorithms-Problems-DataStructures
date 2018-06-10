const maxSubArray = require('../problems/maxSubArray');
const expect = require('chai').expect;

describe('Maximum sub array function', () => {
  it('Should return the maximum sub array', () => {
    const testArray = [1,-5,7];
    const testArray2 = [1,5,7];
    const testArray3 = [1,-5,7,-18, 19];
    const testArray4 = [1,-5,-7];
    for(let key in maxSubArray){
      expect(maxSubArray[key](testArray)).to.equal(7);
      expect(maxSubArray[key](testArray2)).to.equal(13);
      expect(maxSubArray[key](testArray3)).to.equal(19);
      expect(maxSubArray[key](testArray4)).to.equal(1);
    }
  })

  it('Should\'nt return negative values', () => {
    const testArray = [-1,-5,-7,-19,-29083,-29];
    for(let key in maxSubArray){
      expect(maxSubArray[key](testArray)).to.equal(0);
    }
  })

  it('Should return zero from an empty array', () => {
    const testArray = [];
    for(let key in maxSubArray){
      expect(maxSubArray[key](testArray)).to.equal(0);
    }
  })

})