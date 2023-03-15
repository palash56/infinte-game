var ship,shipImg;
var planet,planetImg;
var space, spaceImg;
var alien1Img,alien2Img,alien1,alien2;


function preload(){
 shipImg = loadImage("ship.png")
 planet = loadImage("planet.png")
 spaceImg = loadImage("space.png")
 alien1Img = loadImage("alien1.png")   
 alien2Img = loadImage("alien2.png")   
}


function setup() {
 createCanvas(600,600);
 space = createSprite(300,300);
 space.addImage("bg",spaceImg);
 space.velocityY = 1;
}

function draw() {
 
}