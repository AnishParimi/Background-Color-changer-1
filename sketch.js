var box;
box=createsprite (200,200,20,20)
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if(keyIsDown(DOWN_ARROW)){
background('red')
  }
  if(keyIsDown(UP_ARROW)){
background('blue')
  }
  if(keyIsDown(RIGHT_ARROW)){
    background('green')
      }
      if(keyIsDown(LEFT_ARROW)){
        background('yellow')
          }
}




