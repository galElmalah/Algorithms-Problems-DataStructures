module.exports = function quickSort(arr, ascending = true) {
  if (arr.length == 0) return arr;
  let pivot = [arr[Math.floor(Math.random() * arr.length)]];
  let smaller = [];
  let bigger = [];
  let flag = false;
  let sortedByPivot = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot[0]) {
      smaller.push(arr[i]);
      continue;
    } else if (arr[i] > pivot[0]) {
      bigger.push(arr[i]);
      continue;
    } else {
      if (flag)
        pivot.push(arr[i]);
      flag = true;
    }
  }
  return sortedByPivot.concat(quickSort(smaller), pivot, quickSort(bigger));
}