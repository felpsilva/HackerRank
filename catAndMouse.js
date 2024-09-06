function catAndMouse(x, y, z){
  distaciaRatoA = x - z
  distaciaRatoB = y - z

  if(Math.abs(distaciaRatoA) < Math.abs(distaciaRatoB))(
    console.log("Cat A")
  )
  else if(Math.abs(distaciaRatoA) > Math.abs(distaciaRatoB))(
    console.log("Cat B")
  )
  else if(Math.abs(distaciaRatoA) == Math.abs(distaciaRatoB))(
    console.log("Mouse C")
  )
}
catAndMouse(1, 5, 3)