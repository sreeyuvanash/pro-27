class chainm{

    constructor(bodyA,bodyB){
        var options={

            bodyA:ball4.body,
            bodyB:block4.body,
      
            
            
    
        }
        this.chainm= Constraint.create(options);
        World.add(world,this.chainm)

        
        
    
    }
    display(){

        var posA=this.chainm.bodyA.position
        var posB=this.chainm.bodyB.position
        stroke("blue");
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y)



    }

}