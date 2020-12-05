var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivaltime;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(50,300,20,20);
  monkey.addAnimation("monkeyrun",monkey_running);
  monkey.scale=0.12
  
  
  ground = createSprite(0,350,1200,5);
  
  ground.scale = 2.5;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
background("white");
  
   ground.velocityX = -3 

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -13;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  spawnbanana();
  spawnObstacles();
  
  monkey.collide(ground);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survivaltime:"+survivaltime,100,50);
  
  
  drawSprites();
}

 function spawnbanana(){
   if(frameCount%80==0){
     banana=createSprite(600,100,40,10);
    banana.y = Math.round(random(200,250));
     banana.addImage("banana",bananaImage);
     banana.scale=0.1;
     banana.velocityX=-4;
     banana.lifetime=150;
     
     FoodGroup.add(banana);
   }
 }


 function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,320,35,45);
   obstacle.velocityX = -6;
   obstacle.addImage("stone",obstaceImage);
   obstacle.scale=0.15;
   obstacle.lifetime=100
 }
 }



