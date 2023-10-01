// Após a execução de boa parte do código, percebi que economizar nos nomes das variáveis não é uma boa ideia. Há um perca muito de grande tempo para realização da leitura e interpretação das formas abrevidas. O código fica esteticamente melhor com variáveis curtas, mas não é nada funcional


// variáveis da bolinha
let xBolinha = 300;             //posição x da bolinha
let yBolinha = 200;             //posição y da bolinha
let diametro = 28;              //diametro da bolinha
let raio = diametro/2;          //raio da bolinha

//velocidade da bolinha
let xVelocidade = 4;            //velocidade x da bolinha
let yVelocidade = 4;            //velocidade y da bolinha

//variáveis da raquete do player
/*informação importante: as variáveis de posição da raquete,
são as que formam o canto superior esquerdo*/
let xRaquete = 5;               //posição x da raquete
let yRaquete = 150;             //posição y da raquete
let comprimentoRaquete = 8;    //comprimento da raquete
let alturaRaquete = 90;         //altura da raquete

//variáveis de colisão
let colidiu = false

//placar do jogo
let meusPontos = 0;
let pontosComputador = 0;

//variáveis da raquete do computador
let xComputador = 585;     //posição x da raquete oponente
let yComputador = 150;     //posição y da raquete oponente
let velocidadeComputador;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  show();
  move();
  colisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  colisaoRaquete(xRaquete, yRaquete);
  mostrarRaquete(xComputador, yComputador);
  movimentaComputador();
  colisaoRaquete(xComputador, yComputador);
  pontos();
  placar();
  

  }

function show(){
  circle(xBolinha, yBolinha, diametro);
}

function move(){
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

function colisaoBorda(){
  if (xBolinha > width - raio || xBolinha < 0 + raio){xVelocidade *= -1}
  if (yBolinha > height - raio || yBolinha < 0 + raio){yVelocidade *= -1}
  }

function mostrarRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
}
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
}
}  

/*function colisaoComRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete 
      && yBolinha - raio < yRaquete + alturaRaquete
      && yBolinha + raio > yRaquete){
    xVelocidade *= -1;
  }
}*/

function colisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    xVelocidade *= -1;
    raquetada.play();
  }

}

function movimentaComputador(){
  if (keyIsDown(87)){
    yComputador -= 10;
}
  
  if (keyIsDown(83)){
    yComputador += 10;
}
  /*velocidadeComputador = yBolinha - yComputador - comprimentoRaquete / 2 - 30;
  yComputador += velocidadeComputador;*/
  
}

function placar(){
  stroke(255);
  textSize(24);
  textAlign(CENTER);
  fill(255, 140, 0);
  rect(130, 6, 40, 25)
  fill(255);
  text(meusPontos, 150, 26);
  fill(255, 140, 0);
  rect(430, 6, 40, 25)
  fill(255);
  text(pontosComputador, 450, 26); 
}

function pontos(){
  if (xBolinha > 585){
    meusPontos += 1;
      ponto.play();
  }  
  if (xBolinha < 15){
    pontosComputador += 1;
      ponto.play();
  }
}

const horas =document.getElementById("horas");
const minutos =document.getElementById("minutos");
const segundos =document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = "0" + hr;

    if (min < 10) min = "0" + min;

    if (s < 10) s = "0" + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})