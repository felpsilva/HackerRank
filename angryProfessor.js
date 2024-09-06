function angryProfessor(k, a) {
  let count = 0
  let aulaCancelada = ""
  for(time of a){
    if(time <= 0){
      count++
    }
  }
  if(count >= k){
    aulaCancelada = "NO"
  }else{
    aulaCancelada = "YES"
  }
  return aulaCancelada
}
console.log(angryProfessor(3, [-1, -3, -2, 4, 2]))