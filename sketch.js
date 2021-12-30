var canvas, backgroundImage;

var gameState = 0;
//var playerCount;
var player;
var distance = 0;
//var database;

var form, player, game;

var Iform;

function preload(){
    Iform = loadImage("8.jpg");
 
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //database = firebase.database();
  game = new Game();
  //game.getState();
  game.start();
}


function draw(){
  //if(playerCount === 4){
  //  game.update(1);
  //}
  background("black")
  image(Iform,0,0,displayWidth - 20, displayHeight-30)
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
