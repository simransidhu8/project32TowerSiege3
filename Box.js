class Box{
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.scores= scores;
  
  World.add(world, this.body);

  this.visibility= 225;
}

score(){
  if(this.visibility < 0 && this.visibility >-105){
   scores = scores +1;
  }
}

display(){ 
  console.log(this.body.speed); 
  var angle = this.body.angle; 
  var pos= this.body.position; 

  if(this.body.speed <3){ 
  push(); 
  translate(pos.x, pos.y); 
  rotate(angle); 
  rectMode(CENTER); 
  rect(0,0,this.width, this.height); 
  pop();

  }else{ 
  World.remove(world, this.body); 
  //push(); 
  //translate(pos.x, pos.y);
  //rotate(angle)
  this.visibility = this.visibility -5; 
  //pop(); 
} 
}
};
