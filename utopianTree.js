function utopianTree(n) {
  let ciclos = 0
  for(let i = 0; i <= n; i++){
    if(i % 2 === 0){
      ciclos++
    }else{
      ciclos = ciclos + ciclos
    }
  }
  return ciclos
}

console.log(utopianTree(1))