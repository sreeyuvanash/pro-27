class chain2{

    constructor(bodyA,bodyB){
        var options={

            bodyA:ball2.body,
            bodyB:block2.body,
           
            
            
    
        }
        this.chain2= Constraint.create(options);
        World.add(world,this.chain2)

        
        
    
    }
    display(){

        var posA=this.chain2.bodyA.position
        var posB=this.chain2.bodyB.position
        stroke("blue");
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y)



    }

}