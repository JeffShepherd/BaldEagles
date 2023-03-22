//all comments temporary...remove prior to project finalization

//////canvas
let canvasA = document.getElementById('canvasA')
const context = canvasA.getContext('2d')


//////birdimage
const eagle = new Image()
eagle.src = './eagle.png'


//////bird coordinate values
//bird coordinates
let birdX = 0
let birdY = 60
//fall rate
let birdVertSpeed = 0


//////player-initiated movement
//listeners for spacebar and clicks on canvas
document.addEventListener('keypress', (e) => {
  if(e.code === 'Space') {
    addVerticalSpeed()
  } 
})
canvasA.onclick = () => addVerticalSpeed()
//function to add upward momentum
function addVerticalSpeed() {
  birdVertSpeed = 3
}


//////frame rendering
setInterval(() => {
  context.fillStyle = 'lightgrey'
  context.fillRect(0,0,500,400)
  birdVertSpeed -= 0.3
  birdY -= birdVertSpeed
  context.drawImage(eagle, birdX, birdY, 20*(281/233), 20)
  //draw image arguements are (image, x cord to place top left of image,
  //y cord to place top left of image, width to draw image (multiply by aspect ratio to correct display), heigth to draw image )
}, 80)