function removeDuplicates(arr) {
  const map = {};
  arr.forEach(element => map[element] = 1 );
  return Object.keys(map);
}