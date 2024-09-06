function staircase(n) {
  // Write your code here
  let degrau = ""
  for(let i = 0; i < n; i++) {
    degrau += " "
  }
  for(let j = 0;j < n; j++) {
    degrau = degrau.replace(/\s(?!.*\s)/, "#"),
    console.log(degrau)
  }
}

staircase(10)