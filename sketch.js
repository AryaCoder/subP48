const Engine = Matter.Engine
const World = Matter.World
const Bodies  = Matter.Bodies

var hero,enemy,engine,world,ground;

function preload(){}

function setup(){
createCanvas(windowWidth,windowHeight)
engine = Engine.create()
world = engine.world
ground = new Ground(windowWidth/2,windowHeight,windowWidth*6,30)
hero = new Hero(windowWidth/10,windowHeight-50)

}
function draw(){
    background("white")
Engine.update(engine)

hero.display()
ground.display()
keyPress()
}
function keyPress(){
    if(keyDown(RIGHT_ARROW) ){
       // Matter.Body.applyForce(hero.body,hero.body.position,{x : 10,y:0})
     Matter.Body.setPosition(hero.body,{x : hero.body.position.x+5,y:hero.body.position.y})
    }
    if(keyDown(LEFT_ARROW)){
    Matter.Body.setPosition(hero.body,{x : hero.body.position.x-5,y:hero.body.position.y})
    }
      
    if(keyIsDown(DOWN_ARROW)){}
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(hero.body,hero.body.position,{x : 0,y: 20})
    } 
}