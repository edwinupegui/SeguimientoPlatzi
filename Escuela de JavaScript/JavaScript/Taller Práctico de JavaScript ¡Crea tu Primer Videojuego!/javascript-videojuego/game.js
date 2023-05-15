const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.getElementById('up')
const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')
const btnDown = document.getElementById('down')

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  elementsSize = canvasSize / 10

  startGame()
}
function startGame() {
  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[0]
  const mapRows = map.trim().split('\n')
  const mapRowCols = mapRows.map(row => row.trim().split(''))

  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col]
      const posX = elementsSize * (colIndex + 1)
      const posY = elementsSize * (rowIndex + 1)
      game.fillText(emoji, posX, posY)
    })
  });
  // for (let row = 1; row <= 10; row++){
  //   for (let col = 1; col <= 10; col++) {
  //     game.fillText(emojis[mapsRowCols[row-1][col-1]], elementsSize * col, elementsSize * row);
  //   }
  // }

  // window.innerHeight
  // window.innerWidth

  // game.fillRect(0,50,100,100);
  // game.clearRect(50,50,50,50);
  // game.clearRect()
  // game.clearRect(0,0,50,50);

  // game.font = '25px Verdana'
  // game.fillStyle = 'purple';
  // game.textAlign = 'center';
  // game.fillText('Platzi', 25, 25);
}
function moveUp() {
  console.log('UP')
}
function moveLeft() {
  console.log('LEFT')
}
function moveRight() {
  console.log('RIGHT')
}
function moveDown() {
  console.log('DONW')
}

btnUp.addEventListener('click', moveUp)
btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)
btnDown.addEventListener('click', moveDown)

window.addEventListener("keydown", (e) => {
  let tecla = e.key;

  switch (tecla) {
    case "ArrowUp":
      moveUp();
      break;

    case "ArrowDown":
      moveDown();
      break;

    case "ArrowLeft":
      moveLeft();
      break;

    case "ArrowRight":
      moveRight();
      break;

    default:
      break;
  }
});
