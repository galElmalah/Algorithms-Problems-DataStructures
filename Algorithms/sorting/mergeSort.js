const merge = (arr1, arr2) => {
  let merged = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      merged.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      merged.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  if (arr1Index == arr1.length) {
    merged = merged.concat(arr2.slice(arr2Index));
  } else {
    merged = merged.concat(arr1.slice(arr1Index));
  }

  return merged;
}

const mergeSort = arr => {
  if (arr.length == 1) return arr;
  const mid = parseInt(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}



