////canvas
let canvasA = document.getElementById('canvasA')
const context = canvasA.getContext('2d')
//birdimage
const eagle = new Image()
eagle.src = './eagle.png'

////bird coordinate values
let birdX = 0
let birdY = 60

////frame rendering
setInterval(() => {
  context.fillStyle = 'lightgrey'
  context.fillRect(0,0,500,400)
  context.drawImage(eagle, birdX, birdY, 20*(281/233), 20)
  //draw image arguements are (image, x cord to place top left of image,
  //y cord to place top left of image, width to draw image (multiply by aspect ratio to correct display), heigth to draw image )
}, 80)