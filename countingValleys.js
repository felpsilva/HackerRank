function countingValleys(steps, path) {
  // Write your code here\
  let count = 0
  let vales = 0
  for(let i = 0;  i < steps; i++) {
    if(path.charAt(i) == "U"){
      count++;
    }else if(path.charAt(i) == "D"){
      count--;
    }
    if(count == -1){
      if(path.charAt(i + 1) == "U"){
        vales++
    }
  }
}
  return(vales)
}

countingValleys(12, "DDUUDDUDUUUD")