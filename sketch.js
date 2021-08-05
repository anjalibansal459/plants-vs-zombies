var aloo_Img,bg_Img,mushroom_Img,pea_Img,peaShooter_Img,sun_Img,sunflower_Img,zombie_Img
var aloo,mushroom,pea,peashooter,sun,zombie
var alooOption,mushroomOption,peashooterOption,sunflowerOption
var points=0
var sunGroup,zombieGroup
var s1,s2,s3,s4
let rectangle;
function preload(){
aloo_Img=loadImage("aloo.png")
bg_Img=loadImage("bg.png")
mushroom_Img=loadImage("mushroom.png")
pea_Img=loadImage("pea.png")
peaShooter_Img=loadImage("peashooter.png")
sun_Img=loadImage("sun.png")
sunflower_Img=loadImage("sunflower.png")
zombie_Img=loadAnimation("zombie1.png","zombie2.png")

}

function setup(){
createCanvas(1500,700)
sunGroup=createGroup()
zombieGroup=createGroup()

//let x = random();
  //let y = random(height);
  let w = random(10, 40);
  let h = random(10, 40);
  rectangle = new Rectangle(150,90, w, h);
  
alooOption=createSprite(150,40,20,20)
alooOption.addImage(aloo_Img)
alooOption.scale=0.4

mushroomOption=createSprite(250,40,20,20)
mushroomOption.addImage(mushroom_Img)
mushroomOption.scale=0.2

peashooterOption=createSprite(340,40,20,20)
peashooterOption.addImage(peaShooter_Img)
peashooterOption.scale=0.4

sunflowerOption=createSprite(430,40,20,20)
sunflowerOption.addImage(sunflower_Img)
sunflowerOption.scale=0.5

s1=createSprite(120,210,20,20)
s1.addImage(sunflower_Img)
s1.scale=0.5

s2=createSprite(120,350,20,20)
s2.addImage(sunflower_Img)
s2.scale=0.5

s3=createSprite(120,470,20,20)
s3.addImage(sunflower_Img)
s3.scale=0.5


s4=createSprite(120,590,20,20)
s4.addImage(sunflower_Img)
s4.scale=0.5

}

function draw(){
background(bg_Img)

rectangle.show(mouseX, mouseY);

fill("black")
textSize(30)
text("Points :"+points,1300,100)
spawnZ()
spawnSun()
if(mousePressedOver(sun)){
  sunGroup.destroyEach()
  points=points+10
  
}
if(mousePressedOver(alooOption)){
  aloo=createSprite(Math.round(random(100,1400)),Math.round(random(100,590),30,30))
  aloo.addImage(aloo_Img)
  aloo.scale=0.3
}
drawSprites()
}

function spawnSun(){
  if(frameCount%85===0){
    sun=createSprite(random(100,1400),20,20,20)
    sun.addImage(sun_Img)
    sun.scale=0.4
    sun.velocityY=2
    sunGroup.add(sun)
  }
}

function spawnZ(){
  if(frameCount%90==0){
    zombie=createSprite(1500,random(200,500),20,20)
    zombie.addAnimation("zombie",zombie_Img)
    zombie.velocityX=-4
    zombie.scale=0.3
    zombieGroup.add(zombie)
  }
}


function mousePressed() {
  rectangle.pressed(mouseX, mouseY);
}

function mouseReleased() {
  rectangle.notPressed();
}