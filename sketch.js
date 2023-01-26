var gameState="play"
var rabbit
function preload(){
    apple=loadImage("apple.png")
    bg=loadImage("background.jpg")
    banana=loadImage("banana.png")
    blueberry=loadImage("blueberry.png")
    branchLeft=loadImage("branch left.png")
    branchRight=loadImage("branch right.png")
    grapes=loadImage("grapes.png")
    rabbitCrying=loadImage("rabbit crying.png")
    rabbitRequesting=loadImage("rabbit requesting.png")
    rabbitSitting=loadImage("rabbit sitting.png")
    strawberry=loadImage("strawberry.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    rabbit=createSprite(width/2,height-70)
    rabbit.addImage("sitting",rabbitSitting)
    rabbit.scale=0.6
    // rabbit.addImage("crying",rabbitCrying)
    // rabbit.addImage("requesting",rabbitRequesting)
}
function draw(){
    background(bg)
    drawSprites()
    rabbit.velocityX=3
    if(gameState=="play"){
       
        if(keyDown("left")){
            rabbit.x-=10
        }
        if(keyDown(RIGHT_ARROW)){
            rabbit.x+=10
        }
    }
}