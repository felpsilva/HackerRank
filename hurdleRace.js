function hurdleRace(k, height) {
  let dose = k
  for(let i = 0; i < height.length; i++){
    if(dose < height[i]){
      let diff = height[i] - dose
      dose += diff
    }
  }
  return dose - k
}

console.log(hurdleRace(4, [1, 6, 3, 7, 2]))