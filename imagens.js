let imgEstrada;
let imgAtor;
let imgCarro1;
let imgCarro2;
let imgCarro3;

//sons do jogo
let somDaTrilha;
let somDoPonto;
let somDaColisao;

function preload(){
  imgAtor = loadImage("img/ator-1.png");
  imgCarro1 = loadImage("img/carro-1.png");
  imgEstrada = loadImage("img/estrada.png");
  imgCarro2 = loadImage("img/carro-2.png");
  imgCarro3 = loadImage("img/carro-3.png");
  imagemCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro2, imgCarro1, imgCarro3];  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
}