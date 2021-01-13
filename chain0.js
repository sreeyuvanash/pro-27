class chain0{

    constructor(bodyA,bodyB){
        var options={

            bodyA:ball3.body,
            bodyB:block3.body,
            
            
    
        }
        this.chain0= Constraint.create(options);
        World.add(world,this.chain0)

        
        
    
    }
    display(){

        var posA=this.chain0.bodyA.position
        var posB=this.chain0.bodyB.position
        stroke("blue");
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y)



    }

}