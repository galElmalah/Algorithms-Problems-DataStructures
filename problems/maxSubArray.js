// Brute force - looking at all of the sub arrays.
// Runing time - O(n^3)
function maxSubArray(arr) {
  const len = arr.length;
  let maxSum = 0;
  for (let start = 0; start < len; start++) {
    for (let end = start; end < len; end++) {
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += arr[i];
      }
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
}

// Using DP
// Running time - O(n), Space complexity - O(n)
function maxSubArrayLinear(arr) {
  const sub = [Math.max(arr[0], 0)];
  for (let i = 1; i < arr.length; i++) {
    sub[i] = Math.max(sub[i - 1] + arr[i], 0);
  }

  return Math.max(...sub);
}

// Using DP
// Running time - O(n), Space complexity - O(1)
function maxSubArrayConstantSpace(arr) {
  let currentMax = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(currentMax + arr[i], arr[i]);
    max = Math.max(max, currentMax);
  }
  return max;
}
