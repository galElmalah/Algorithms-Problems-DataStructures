module.exports = {
  randomArray(numberOfElements) {
    const arr = [];
    for (let i = 0; i < numberOfElements; i++) {
      arr.push(parseInt(Math.random() * 100000))
    }
    return arr;
  },
  isSorted(arr, compareFunction = (a,b) => a < b){
    for(let i = 0; i < arr.length -1; i++){
      if(!compareFunction(arr[i],arr[i+1])){
        return false;
      }
    }
    return true
  }
}