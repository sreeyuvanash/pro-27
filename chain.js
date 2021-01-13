class chain{

    constructor(bodyA,bodyB){
        var options={

            bodyA:ball1.body,
            bodyB:block1.body,
      
            
            
    
        }
        this.chain= Constraint.create(options);
        World.add(world,this.chain)

        
        
    
    }
    display(){

        var posA=this.chain.bodyA.position
        var posB=this.chain.bodyB.position
        stroke("blue");
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y)



    }

}