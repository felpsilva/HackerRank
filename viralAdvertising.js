function viralAdvertising(n) {
  let pessoas_like = 0
  let pessoas = 5
  for(let i = 0; i < n; i++){
    pessoas_like += Math.floor(pessoas / 2 )
    pessoas = Math.floor( pessoas / 2) * 3
  }
  return pessoas_like
}

viralAdvertising(3)