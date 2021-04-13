
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var gameState= "onsling"

var score = 0;

//var log6;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getbackgroundImage()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform= new Ground(100,305,300,170)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,100);

    //log6= new Log(230,180,80,PI/2);

    chain = new slingshot(bird.body,{x:240,y:90})

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    
    Engine.update(engine);

    fill("white")
    textSize(20)
      text("Score : " + score, 980,50)
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);

     pig1.score()
     pig3.score()

    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    //log6.display();

   chain.display();
   bird.display();
   //to check coordinates
   text(mouseX + " " +mouseY,mouseX,mouseY)
}

function mouseDragged(){
    if(gameState === "onsling"){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
    }
    console.log(gameState)
}

function mouseReleased(){
    gameState= "launched"
    chain.fly()
}

function keyPressed(){

    //console.log(bird.body.velocity.y)
    if(bird.body.velocity.y <= 1){
        gameState = "onsling"
        bird.trajectory=[]
    Matter.Body.setPosition(bird.body, {x:200,y:200})
    if(keyCode=== 32){
    chain.attach(bird.body)
    }

    //gameState = "onsling"
    // bird.trajectory=[]
    // Matter.Body.setPosition(bird.body, {x:200,y:200})
    // if(keyCode=== 32){
    // chain.attach(bird.body)
    }
    
    console.log(bird.trajectory)
}

async function getbackgroundImage()
{
    var response = await fetch("http://worldclockapi.com/api/json/est/now")
    var responsejson = await response.json()

    var datetime= responsejson.currentDateTime
    var Hour = datetime.slice(11,13)

    if(Hour>8 && Hour<15)
    {
        backgroundImg = loadImage("sprites/bg.png");
    }
    else
    {
        backgroundImg = loadImage("sprites/bg2.jpg");
    }

    console.log(Hour)

}