function binarySearch(arr, val){
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] == val) {
    return true;
  }
  if (mid == 0) {
    return false;
  }
  if (arr[mid] > val) {
    return binarySearch(arr.slice(0, mid), val)
  }
  return binarySearch(arr.slice(mid), val)
}

console.log(binarySearch([1,2,5,6,7,8,11,213,345,346,356,789],1))