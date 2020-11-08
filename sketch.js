
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananasGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas=(600,200);
  score = 0
  
  bananasGroup = createGroup();
  obstaclesGroup=createGroup();
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
}


function draw() {
  background("lightblue");
  text("Score: "+ score, 300,50);
  
    score = score + Math.round(getFrameRate()/60);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
     }
  if(keyDown("space")&& monkey.y >=100) {
       monkey.velocityY = -13;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
 spawnBananas();
  spawnObstacles();
  
  monkey.collide(ground);
 drawSprites();
  
}
function spawnBananas() {

   if (frameCount % 80 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
     banana.lifetime=150
     
    bananasGroup.add(banana);
   }
   }
function spawnObstacles() {

   if (frameCount % 300 === 0) {
     obstacle = createSprite(400,325,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
     obstacle.lifetime=150
     
    obstaclesGroup.add(obstacle);
   }
   }




