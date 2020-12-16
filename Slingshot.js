class Slingshot {
constructor(body1,body2){
    var coptions= { bodyA:body1 , bodyB:body2 , stiffness:0.3, length:200}
    this.sling = Constraint.create(coptions);
    World.add(world,this.sling);
}
display(){
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
}
}