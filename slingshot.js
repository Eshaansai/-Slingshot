class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
    //to pass pointB
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    //empty bodyA so that the bird can be released
    fly(){
        this.sling.bodyA=null;
    }
    display(){
    //display only when there is some thing in bodyA
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}