console.log('Hello World!');
function desenharCirculo(){
  //acessando o id
  let circulo = document.getElementById("circulo")
  //definindo o contexto
  let contexto = circulo.getContext("2d")
  //desenhando circulo
  let x = 100
  let y = 50
  contexto.fillStyle="darkred"
  contexto.arc(x,y,50,0,2 * Math.PI)
  contexto.fill()
  

}

