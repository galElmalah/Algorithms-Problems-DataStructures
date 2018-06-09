// m1 should be the bigger matrix
// Both matrixes should have a size of n*n m*m etc...
function isSubMatrix(m1, m2) {
  n = m1.length;
  m = m2.length;
  let flag = true;
  for (let l = 0; l <= n - m; l++) {
    for (let i = 0; i <= n - m; i++) {
      flag= true;
      for (let j = 0; j < m && flag; j++) {
        for (let k = 0; k < m && flag; k++) {
          if (m1[j+i][k+l] !== m2[j][k]) {
            flag = false;
          }
          if (j === m-1 && k === m-1) {
            return true
          }
        }
      }
    }
  }
}