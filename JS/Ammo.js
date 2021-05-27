class Ammo{
    constructor(x,y){
    var options =  {  
        isStatic : true 
    
    }
this.body = Bodies.circle(x,y,20,options)  
this.r = 20
World.add(world,this.body)
}
display(){
var pos = this.body.position
push()
trsanslate(pos.x,pos.y)
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)
pop()
}
}