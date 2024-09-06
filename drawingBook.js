function pageCount(n, p) {

  let virarDeFrente = Math.floor(p / 2);
  if(n % 2 === 0){
      n = n + 1;
  }else{
      n = n
  }
  let virarDeTras = Math.floor((n - p) / 2);
  return Math.min(virarDeFrente, virarDeTras);

}

console.log(pageCount(6, 2));
//1