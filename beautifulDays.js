function beautifulDays(i, j, k) {
  let loop = j - i
  let dias = []
  let count = 0
  for(let x = 0; x <= loop; x++){
    dias.push(j - x)
  }
  
  dias.reverse()

  for(dia of dias){
    let numeroInvertidoString = dia.toString().split('').reverse().join('');
    let numeroInvertido = parseInt(numeroInvertidoString, 10)
    let resultado = (dia - numeroInvertido) / k
    let isFloat = typeof resultado === 'number' && !isNaN(resultado) && resultado % 1 !== 0
    if(!isFloat){
      count++
    }
  }
}
beautifulDays(20, 23, 6)