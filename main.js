//all comments temporary...remove prior to project finalization
////global variables
//game active boolean
let gameActive = false
//bird coordinates
let birdX = 0
let birdY = 60
//fall rate
let birdVertSpeed = 0


//////canvas and image creation
let canvasA = document.getElementById('canvasA')
const context = canvasA.getContext('2d')
//birdimage
let eagle = new Image()
eagle.src = './eagle.png'
//initial population of canvcas
context.fillStyle = 'lightgrey'
populateCanvas()




//////player-initiated movement
//listeners for spacebar and clicks on canvas
document.addEventListener('keypress', (event) => {
  if(!gameActive) {
    gameActive = true
    startGame()
  } else if(event.code === 'Space') {
    addVerticalSpeed()
  }
})

canvasA.onclick = () => {
  if(gameActive) {
    addVerticalSpeed()
  } else {
    gameActive = true
    startGame()
  }
}



//function to add upward momentum
function addVerticalSpeed() {
  birdVertSpeed = 3
}

//////frame rendering
function startGame() {
  console.log('yup')
  let render = 
    setInterval(() => {
      populateCanvas()
      birdVertSpeed -= 0.3
      birdY -= birdVertSpeed
      //check if bird hit bottom
      if(birdY > 130) {
        resetGame(render)
      }
    }, 80)
}
    
function resetGame(render) {
  clearInterval(render)
  birdVertSpeed = 0
  birdY = 60
  populateCanvas()
  gameActive = false
}

function populateCanvas() {
  context.fillRect(0,0,500,400)
  context.drawImage(eagle, birdX, birdY, 20*(281/233), 20)
}

