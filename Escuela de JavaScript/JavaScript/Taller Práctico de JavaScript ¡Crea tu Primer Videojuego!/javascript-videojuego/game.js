const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.getElementById('up')
const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')
const btnDown = document.getElementById('down')

let canvasSize;
let elementsSize;

let playerPosicion = {
  x: undefined,
  y: undefined
}

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

  game.clearRect(0, 0, canvasSize, canvasSize)
  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col]
      const posX = elementsSize * (colIndex + 1)
      const posY = elementsSize * (rowIndex + 1)

      if (col === 'O' && !playerPosicion.x && !playerPosicion.x) {
        playerPosicion.x = posX;
        playerPosicion.y = posY;
      }

      game.fillText(emoji, posX, posY)
    })
  });

  MovePlayer()
}

function MovePlayer() {
  game.fillText(emojis['PLAYER'], playerPosicion.x, playerPosicion.y)
}


function moveUp() {
  if((playerPosicion.y - elementsSize) < elementsSize) return
  playerPosicion.y -= elementsSize
  startGame()
}
function moveLeft() {
  if((playerPosicion.x - elementsSize) < elementsSize) return
  playerPosicion.x -= elementsSize
  startGame()
}
function moveRight() {
  playerPosicion.x += elementsSize
  startGame()
}
function moveDown() {
  playerPosicion.y += elementsSize
  startGame()
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
