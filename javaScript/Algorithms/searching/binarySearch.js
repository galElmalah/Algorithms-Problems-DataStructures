module.exports = function binarySearch(arr, val){
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

