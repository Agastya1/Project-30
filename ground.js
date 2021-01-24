class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,900,20,options);
      
      World.add(world, this.body);
    }
    display(){
        noStroke();
        
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(450,390,900,20);
    }
  };