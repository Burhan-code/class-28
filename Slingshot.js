class Slingshot {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        } 
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
    var pointA = this.sling.body.A.position
    var pointB = this.sling.body.B.position
    strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}