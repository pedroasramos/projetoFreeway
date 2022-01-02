let xAtor = 100;
let yAtor = 366;
let alturaAtor = 30;
let larguraAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imgAtor, xAtor, yAtor, alturaAtor, larguraAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)) {
      yAtor -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()){
       yAtor += 5; 
    }
    
  }
}

function verificaColisao(){
  //hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],       alturaCarro, larguraCarro, xAtor, yAtor, 15);
    if (colisao){
      voltaAtorInicio();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
          meusPontos -= 1;
          }
    }
  }
}

function voltaAtorInicio(){
  yAtor = 366;
}

function incluirPontos(){
  fill(color(255, 240, 60))
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    somDoPonto.play();
    meusPontos += 1;
    voltaAtorInicio();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366    
}

















