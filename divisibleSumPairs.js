function divisibleSumPairs(k, ar) {
  // Write your code here
  let sum = 0
  let count = 0
  for(let i = 0; i < ar.length; i++) {
    for(let j = 0; j < ar.length; j++){
      if( i < j ){
        sum = ar[i] + ar[j];
        if(sum % k == 0){
          count++;
        }
      }
    }
    sum = 0
  }
  console.log(count)

}

divisibleSumPairs(3, [1, 3, 2, 6, 1, 2])