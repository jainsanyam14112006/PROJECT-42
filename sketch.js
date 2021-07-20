var hasDocked=false

function preload(){
  bg=loadImage(" spacebg.jpg");
  issImage=loadImage("iss.png");
  sc1Image=loadImage("spacecraft1.png");
  sc2Image=loadImage("spacecraft2.png");
  sc3Image=loadImage("spacecraft3.png");
  sc4Image=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  sc=createSprite(400, 200);
  sc.addImage(sc1Image);
  sc.scale=0.1;
  iss=createSprite(300,100);
 iss.addImage(issImage);
  iss.scale=0.1;
}

function draw() {
  background(bg);
  if(!hasDocked){
    sc.x=sc.x+random(-1,1);
    if(keyDown("UP_ARROW")){
      sc.y=sc.y-2
    }
    if(keyDown("DOWN_ARROW")){
      sc.addImage(sc2Image)
      sc.y=sc.y+2
    }
    if(keyDown("LEFT_ARROW")){
      sc.addImage(sc3Image)
      sc.x=sc.x-2
    }
    if(keyDown("RIGHT_ARROW")){
      sc.addImage(sc4Image)
      sc.x=sc.x+2
    }

  }
  if(sc.isTouching(iss))  {

    hasDocked=true;
    text("Docking Succesfull",200,300)
  }
  
  drawSprites();
}