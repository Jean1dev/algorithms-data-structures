'use strict';


/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(a) {
  let out = -100, sum = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      sum = 0;
      sum += a[i][j];
      sum += a[i][j + 1];
      sum += a[i][j + 2];
      sum += a[i + 1][j + 1];
      sum += a[i + 2][j];
      sum += a[i + 2][j + 1];
      sum += a[i + 2][j + 2];
      if (sum > out) {
        out = sum;
      }
    }
  }

  return out
}

function main() {

  let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ]

  const result = hourglassSum(arr);
  console.log(result)
}

main()
