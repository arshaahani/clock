var hr,min,sec
function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(0);
  translate(200,200) 
  rotate(-90)
  fill(255,0,0,128)
  stroke(255)
  rectMode(CENTER)
  rect(0,0,250,250)
  hr=hour()
  min=minute()
  sec=second() 


  hrangle=map(hr%12,0,12,0,360)
  minangle=map(min,0,60,0,360)
  secangle=map(sec,0,60,0,360)
   
  push()
  rotate(secangle)
  stroke("green")
  strokeWeight(3)
  line(0,0,100,0)
  pop()  

  push()
  rotate(minangle)
  stroke("blue")
  strokeWeight(4)
  line(0,0,80,0)
  pop()  

  push()
  rotate(hrangle)
  stroke("yellow")
  strokeWeight(3)
  line(0,0,50,0)
  pop()  
}