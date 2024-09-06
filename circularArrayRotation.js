function circularArrayRotation(a, k, queries) {
  let arr = a.slice();
  const n = arr.length;
  k = k % n; // reduce k to the range [0, n-1]
  console.log('k', k)
  // Rotate the array by k positions
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  
  const itemQueries = queries.map(q => arr[q]);
  // return itemQueries;
}

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
circularArrayRotation([1, 2, 3], 10, [0, 1, 2])