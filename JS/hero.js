class Hero{
constructor(x,y){
var options = {
    density :0.1 ,
    restitution : 0.0001,
     friction : 1
}
this.body=  Bodies.rectangle(x,y,30,50,options)

this.width =30
this.height = 50
World.add(world,this.body)
}
display(){
var pos = this.body.position 
push()
translate(pos.x,pos.y)
rectMode(CENTER)
//rotate(this.body.angle)
rect(0,0,this.width,this.height)
pop()
}





}
