function removeDuplicates(arr) {
  const map = {};
  arr.forEach(element => map[element] = 1 );
  return Object.keys(map);
}

console.log(removeDuplicates([1,2,3,33,4,4,4,4,4,1,1,1]))