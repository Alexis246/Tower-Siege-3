const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling";
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var polygon, polygonImg, slingshot;
var platform1,platform2,platform3;
var score;
var bg = "dayImage.png";

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    score = 0;

    ground = new Ground(600,height,1200,20);

    platform1 = new Ground(390,265,170,20);
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    box9 = new Box(390,155,30,40);

    platform2 = new Ground(650,150,170,20);
    box10 = new Box(590,120,30,40);
    box11 = new Box(620,120,30,40);
    box12 = new Box(650,120,30,40);
    box13 = new Box(680,120,30,40);
    box14 = new Box(710,120,30,40);
    box15 = new Box(620,80,30,40);
    box16 = new Box(650,80,30,40);
    box17 = new Box(680,80,30,40);
    box18 = new Box(650,40,30,40);

    var polygon_settings={
        'restitution':0.5,
        'friction':1,
        'density':1,
        isStatic:false
    }
    polygon = Bodies.circle(50,200,20,polygon_settings);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});

}

function draw(){
    if (bg){
    if (bg === "day"){
        background("blue");
    }
    if (bg === "night"){
        background("purple");
    }
    }
    Engine.update(engine);
    fill("black");
    textSize(20);
    text("Score: " + score, width/2-25,50);
    ground.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();
    box17.score();
    box18.display();
    box18.score();

    slingshot.display(); 
    
    platform1.display();
    platform2.display();
    getBackgroundImg();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
}

function mouseDragged(){
    if (gameState != "launched"){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        gameState = "onSling";
        slingshot.attach(this.polygon);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "day";
    }
    else{
        bg = "night";
    }
}