
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0
var ground
var gameState="play"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
monkey=createSprite(100,500,20,20)
  monkey.addAnimation("my animation",monkey_running)
  monkey.scale=0.2
  ground=createSprite(300,550,600,20)
  
  foodGroup= new Group()
  obstacleGroup = new Group()
}



function draw() {
  background("lightblue")
  text("my score"+score,50,50)
  if(gameState==="play"){
    if(keyDown("space")){
      monkey.velocityY=-5
    }
    spawnBananas()
  spawnRocks()
    if(monkey.isTouching(foodGroup)){
      score=score+1
      foodGroup.destroyEach()
    }
    if(monkey.isTouching(obstacleGroup)){
       gameState="end"
      
       }
    monkey.velocityY=monkey.velocityY+0.1
  }
  
  
 if(gameState==="end"){
    obstacleGroup.destroyEach()
   foodGroup.destroyEach()
  }
monkey.collide(ground)
  
     
  drawSprites();
}

function spawnBananas() {
  //write code here to spawn the clouds
 if (frameCount % 80 === 0) {
    var banana = createSprite(600,320,40,10);
    banana.y = Math.round(random(220,500));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    
    //add each cloud to the group
    foodGroup.add(banana);
  }
}
function spawnRocks() {
  //write code here to spawn the clouds
 if (frameCount % 300 === 0) {
    var rock = createSprite(600,510,40,10);
    //rock.y = Math.round(random(220,500));
    rock.addImage(obstacleImage);
    rock.scale = 0.2;
    rock.velocityX = -3;
    
     //assign lifetime to the variable
   rock.lifetime = 200;
    
    
    
    //add each cloud to the group
    obstacleGroup.add(rock);
  }
}





