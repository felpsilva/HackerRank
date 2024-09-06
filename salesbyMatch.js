function sockMerchant(n, ar) {
let count = 0;
let obj = {};	
for(let par_meia of ar){
  if(obj[par_meia]){
    obj[par_meia]++
  }else{
    obj[par_meia] = 1
  }
}

for(let par_meia of ar){
  obj[par_meia] = obj[par_meia] % 2 === 0;
  count += obj[par_meia];
}
return count;
}

console.log(sockMerchant(7, [1,2,1,2,1,3,2,2]))