function getMoneySpent(keyboards, drives, b) {
  keyboards = keyboards.sort((a, b) => b - a)
  drives = drives.sort((a, b) => b - a)
  let valores = []
  for(let i = 0;i < keyboards.length; i++){
    for(let j = 0;j < drives.length; j++){
      if(keyboards[i] + drives[j] <= b){
        let soma = keyboards[i] + drives[j];  
        valores.push(soma);
      }
    }
  }
  return valores.length === 0 ? -1 : Math.max(...valores);
}

console.log(getMoneySpent([3,1], [5,2,8], 10))
