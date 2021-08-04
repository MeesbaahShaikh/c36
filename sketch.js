var canvas;
var form,player,game;
var database;
var gameState=0;

function setup(){
 canvas=createCanvas(400,400);
//connect the project to the database

database=firebase.database();
console.log(database);

game=new Game();

}

function draw(){
  background("white");
  
    
    drawSprites();
  
}


