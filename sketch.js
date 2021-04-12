var gameState = 0

function preload() {
  background1 = loadImage("Images/backgroundImage1.jpg")
  startButtonImage = loadImage("images/StartButton.png")
  nextButtonImage = loadImage("Images/NextButtonImage.png")
  filledChequeImage = loadImage("Images/filledCheque.jpg")
  unfilledChequeImage = loadImage("Images/unfilledCheque.png")
  backButtonImage = loadImage("Images/BackButtonImage.png")
}
function setup() {
  createCanvas(1280,610);
  start = createSprite(920, 270,)
  start.addImage(startButtonImage)
  start.scale = 0.7

  filledCheque = createSprite(600, 350)
  filledCheque.addImage(filledChequeImage)
  filledCheque.scale = 1.3
  filledCheque.visible = false

  next = createSprite(1200, 550)
  next.addImage(nextButtonImage)
  next.scale = 0.1
  next.visible = false

  back = createSprite(80, 550)
  back.addImage(backButtonImage)
  back.scale = 0.5
  back.visible = false

  unfilledCheque = createSprite(600, 400) 
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
  
  
    
}
if(mousePressedOver(next) && gameState === 1) {
     
          gameState = 2;
}

       


if(gameState === 2) {
  filledCheque.visible = false
  back.visible = true
  unfilledCheque.visible = true
  textSize(35) 
  fill("black")
  strokeWeight(2)
  stroke("pink")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Test Time", 600, 70)
}
 if(mousePressedOver(back)) {
   gameState -= 1
 }
drawSprites();
}


