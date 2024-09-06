function birthday(s, d, m) {
  let pedacos = 0
  let soma = 0
  for(let i = 0; i <= (s.length - m); i++){
      for(let j = 0; j < m; j++){
          soma = soma + s[i + j]
      }
      if(soma === d){
          pedacos++
      }
      soma = 0;
  }
  
  return pedacos

}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))