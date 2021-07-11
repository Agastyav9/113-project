function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() 
{
  image(video, 150, 130, 280, 250);
   
  fill(0, 128, 0);
  stroke(0, 128, 0)
  rect(90, 40, 20, 400)
  rect(530, 40, 20, 400)

  fill(0, 128, 0);
  stroke(0, 128, 0)
  rect(90, 40, 460, 20)

  rect(90, 420, 460, 20)




  fill(255, 0, 0);
  stroke(225, 0, 0);
  


  
  fill(255, 50, 0);
  stroke(225, 0, 0);
  circle(540, 420, 80);
  circle(100, 420, 80);
  circle(540, 50, 80);
  circle(102, 50, 80);


  
}

function take_snapshot()
{
    save('Filter.png')
}