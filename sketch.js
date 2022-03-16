var gameState = 0
var input1
var input2
var input3
var input4
var input5
var YesOrNo
function preload() {
  background1 = loadImage("Images/backgroundImage1.jpg")
  startButtonImage = loadImage("Images/StartButton.png")
  nextButtonImage = loadImage("Images/NextButtonImage.png")
  filledChequeImage = loadImage("Images/filledCheque.jpg")
  unfilledChequeImage = loadImage("Images/UnfilledCheque.png")
  backButtonImage = loadImage("Images/BackButtonImage.png")
  nextButtonImage2 = loadImage("Images/NextButtonImage.png")
}
function setup() {
  createCanvas(WindowWidth, WindowHeight);
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

  input1 = createInput("1.")
  input1.position(750, 100)
  input1.hide()

  input2 = createInput("2.")
  input2.position(750, 200)
  input2.hide()

  input3 = createInput("3.")
  input3.position(750, 300)
  input3.hide()

  input4 = createInput("4.")
  input4.position(750, 400)
  input4.hide()

  input5 = createInput("5.")
  input5.position(750, 500)
  input5.hide()

  YesOrNo = createInput("Yes Or No")
  YesOrNo.position(550, 100)
  YesOrNo.hide()
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
  text("Come on!! Let's learn how to fill a cheque  ", 250, 100)
  next.visible = true
  filledCheque.visible = true
  next2.visible = false
  unfilledCheque.visible = false
  back.visible = false
  input1.hide()
  input2.hide()
  input3.hide()
  input4.hide()
  input5.hide()
  YesOrNo.hide()

  
  
}

if(mousePressedOver(next) && gameState === 1) {
  
  gameState = 2;
 
}

       


if(gameState === 2) {
  filledCheque.visible = false
  back.visible = true
  next.visible = false
  next2.visible = true
  back2.visible = false
  unfilledCheque.visible = true
  input1.show()
  input2.show()
  input3.show()
  input4.show()
  input5.show()
  YesOrNo.hide()
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
   input2.hide()
   input3.hide()
   input4.hide()
   input5.hide()
   YesOrNo.show()

   textSize(45) 
   fill("black")
   strokeWeight(2)
   stroke("pink")
   textFont("Curlz MT")
   textStyle(BOLDITALIC)
   text("Was it fun??!! ", 500, 70)
   textSize(45) 
   fill("black")
   strokeWeight(2)
   stroke("pink")
   textFont("Curlz MT")
   textStyle(BOLDITALIC)
   text("Correct answers \n 1. Today's date (13/04/2021) \n 2. Name of  person receving  money (Hope Mikaelson) \n 3. Amount giving to the other person in word (Ten Tousands only) \n 4.Amount giving in numbers(10,000) \n 5. Your signature (Klaus Mikaelson)", 50, 200)
   
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


