function dayOfProgrammer(year) {
  if(year === 1918){
    return "26.09." + year
  }else if(year >= 1919 && year % 4 === 0 && year % 100 !== 0 || year >= 1919 && year % 400 === 0 ){
    return "12.09." + year
  }else if(year >= 1919 && year % 4 !== 0 || year >= 1919 && year % 400 !== 0 ){
    return "13.09." + year
  }else if(year <= 1919 && year % 4 === 0){
    return "12.09." + year
  }else if(year <= 1919 && year % 4 !== 0){
    return "13.09." + year
  }
}
console.log(dayOfProgramar(1783))