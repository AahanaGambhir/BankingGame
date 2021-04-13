var gameState = 0
var input1
function preload() {
  background1 = loadImage("Images/backgroundImage1.jpg")
  startButtonImage = loadImage("images/StartButton.png")
  nextButtonImage = loadImage("Images/NextButtonImage.png")
  filledChequeImage = loadImage("Images/filledCheque.jpg")
  unfilledChequeImage = loadImage("Images/unfilledCheque.png")
  backButtonImage = loadImage("Images/BackButtonImage.png")
  nextButtonImage2 = loadImage("Images/NextButtonImage.png")
}
function setup() {
  createCanvas(1280,610);
  start = createSprite(920, 270,)
  start.addImage(startButtonImage)
  start.scale = 0.7

  filledCheque = createSprite(600, 350)
  filledCheque.addImage(filledChequeImage)
  filledCheque.scale = 0.4
  filledCheque.visible = false

  next = createSprite(1200, 550, 1, 1)
  next.addImage(nextButtonImage)
  next.scale = 0.1
  next.visible = false

  next2 = createSprite(1120, 550, 1, 1)
  next2.addImage(nextButtonImage)
  next2.scale = 0.1
  next2.visible = false

  back = createSprite(80, 550)
  back.addImage(backButtonImage)
  back.scale = 0.5
  back.visible = false

  back2 = createSprite(160, 550)
  back2.addImage(backButtonImage)
  back2.scale = 0.5
  back2.visible = false

  unfilledCheque = createSprite(350, 290) 
  unfilledCheque.addImage(unfilledChequeImage)
  unfilledCheque.visible = false

 

}

function draw() {
background(background1); 
if(gameState === 0) {
textSize(55) 
fill("black")
strokeWeight(4)
stroke("pink")
textFont("Curlz MT")
textStyle(BOLDITALIC)
text("Hey! Wanna learn a thing or two about banking!!", 120, 200);


textSize(35) 
fill("black")
strokeWeight(2)
stroke("pink")
textFont("Curlz MT")
textStyle(BOLDITALIC)
text("What are you waiting for??!! Press ", 340, 280)
}
if(mousePressedOver(start)) {
  gameState = 1
  start.visible = false
  console.log(gameState)

}
console.log(gameState)

  if(gameState === 1) {
  textSize(45)
  fill("black")
  stroke("pink")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Come on!! Let's learn how to fill a cheque", 250, 100)
  next.visible = true
  filledCheque.visible = true
  next2.visible = false
  unfilledCheque.visible = false
    
}

if(mousePressedOver(next) && gameState === 1) {
  input1 = createInput("1.")
  input1.position(500, 500)
  
  gameState = 2;
 
}

       


if(gameState === 2) {
  filledCheque.visible = false
  back.visible = true
  next.visible = false
  next2.visible = true
  back2.visible = false
  unfilledCheque.visible = true
  textSize(35) 
  fill("black")
  strokeWeight(2)
  stroke("pink")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Test Time", 600, 70)
  
}
 if(mousePressedOver(next2)) {
   gameState = 3
 }
 if(gameState === 3) {
   unfilledCheque.visible = false
   back2.visible = true
   back.visible = false
   next2.visible = false
   input1.hide()
   textSize(45) 
   fill("black")
   strokeWeight(2)
   stroke("pink")
   textFont("Curlz MT")
   textStyle(BOLDITALIC)
   text("Was it fun??!! ", 600, 70)
   textSize(45) 
   fill("black")
   strokeWeight(2)
   stroke("pink")
   textFont("Curlz MT")
   textStyle(BOLDITALIC)
   text("Correct answers \n 1. \n 2. \n 3. \n 4. \n 5.", 550, 250)
 }
 if(mousePressedOver(back)) {
   gameState = 1
   next2.visible = false
 }
 if(mousePressedOver(back2)) {
   gameState = 2
  
 }
drawSprites();
}


