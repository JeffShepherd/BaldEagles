let canvasA = document.getElementById('canvasA')
const context = canvasA.getContext('2d')

const eagle = new Image()
eagle.src = './eagle.png'


setInterval(() => {
  context.fillStyle = 'lightgrey'
  context.fillRect(0,0,500,400)
  context.drawImage(eagle, 0, 60, 20*(281/233), 20)
  //draw image arguements are (image, x cord to place top left of image,
  //y cord to place top left of image, width to draw image, heigth to draw image )
}, 80)