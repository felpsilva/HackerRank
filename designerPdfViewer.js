function designerPdfViewer(h, word) {
  let palavra = word.split('')
  let alturaLetra = []
  for(let letra of palavra){
    let index = letra.charCodeAt(0) - 'a'.charCodeAt(0)
    alturaLetra.push(h[index])
  }
  return palavra.length * Math.max(...alturaLetra)
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'))
