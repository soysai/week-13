function setup() {
  createCanvas(500, 500);
  background(0);
  noStroke();
 
}

function draw() {
  if (mouseIsPressed) {
  
    if (mouseX, mouseY >=50){
    fill(225, 0, 0,);
    ellipse(mouseX, mouseY, 50, 50);
    
    fill(0, 15);
    rect(0, 0, width, height);
      
    }
    
     if (mouseX,mouseY <= 150){
      fill('#fae')
      ellipse(mouseX, mouseY, 50, 50);
       fill(0, 15);
    rect(0, 0, width, height);
    }
    
    if (mouseX, mouseY >= 300){
       fill('rgb(0,255,0)')
      ellipse(mouseX, mouseY, 50, 50);
       fill(0, 15);
    rect(0, 0, width, height);
    }
     if (mouseX <= 200){
       fill(color(0, 0, 255))
      ellipse(mouseX, mouseY, 50, 50);
       fill(0, 15);
    rect(0, 0, width, height);
    }
    
    
    if (mouseIsPressed === true){
      ellipse(mouseX,mouseY, 50, 50);
    }
  }
  }
