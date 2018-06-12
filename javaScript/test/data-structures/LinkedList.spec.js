const LinkeList = require('../../data-structures/linked-list/linkedList');
const expect = require('chai').expect;
const { randomArray } = require('../../utills/arrays');
const shuffleArray = require('../../problems/shuffleArray');
describe('LinkedList data structure', () => {
  it('Should find all of the values in the list', () => {
    const LL = new LinkeList();
    const testArray = randomArray(40);
    testArray.forEach(e => LL.push(e))
    testArray.forEach(e => expect(testArray.includes(LL.find(e).data)).to.be.true )
    expect(LL.find(-1)).to.be.null;
  });

  it('Should delete by value if the value exist', () => {
    const LL = new LinkeList();
    const testArray = randomArray(100);
    testArray.forEach(e => LL.push(e))
    shuffleArray(testArray);
    testArray.forEach(e => {
      expect(LL.deleteByValue(e)).to.be.true;
    })
    expect(LL.deleteByValue(-2)).to.be.false;
    expect(LL.deleteByValue()).to.be.false;
    LL.push(1);
    expect(LL.deleteByValue(-2)).to.be.false;
    
    


  });

  it('Should return true if the list is empty', () => {
    const LL = new LinkeList();
    expect(LL.isEmpty()).to.be.true;
    LL.push(1);
    expect(LL.isEmpty()).to.be.false;
  });

  it('Should return false if the list is not empty', () => {
    const LL = new LinkeList();
    LL.push(1);
    expect(LL.isEmpty()).to.be.false;
  });

  it('Should reverse the list', () => {
    const LL = new LinkeList();
    const testArray = randomArray(40);
    LL.push(...testArray);
    LL.reverse();
    testArray
      .reverse()
      .forEach( e => {
        expect(LL.head.data).to.be.equal(e);
        LL.head = LL.head.next;
      });
  });

  it('Should keep a consistent toString format', () => {
    const LL = new LinkeList();
    const LL2 = new LinkeList();

    LL.push(1,2,3,4);
    LL2.push(1,2,3,4);

    expect(LL.toString()).to.be.equal(LL2.toString());
  });

  it('Should shift the list', () => {
    const LL = new LinkeList();
    LL.push(1,2);
    let tmp = LL.head;
    LL.shift();
    expect(LL.head.data).to.be.equal(tmp.next.data);
    LL.shift();
    expect(LL.shift()).to.be.null;
  })

})