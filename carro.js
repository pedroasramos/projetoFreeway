let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3, 2.5, 5, 4.2, 3.6];

let alturaCarro = 50;
let larguraCarro = 35;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i ++){
      image(imagemCarros[i], xCarros[i], yCarros[i],                   alturaCarro, larguraCarro)
  }  
}

function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarroInicio(){
  for (let i = 0; i < xCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}













