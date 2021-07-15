import {
  TILE_STATUSES,
  createBoard,
  markTile,
  revealTile,
  checkWin,
  checkLose,
} from "./minesweeper.js"

const BOARD_SIZE = 10
let NUMBER_OF_MINES = 0

const showBoardLevelEasy = document.querySelector('.showBoardEasy')
const showBoardLevelMedium = document.querySelector('.showBoardMedium')
const showBoardLevelHard = document.querySelector('.showBoardHard')
const buttons = document.querySelector('.buttons')
const boardElement = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-count]")
const messageText = document.querySelector(".subtext")
let board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)

showBoardLevelEasy.addEventListener('click', () => {
  NUMBER_OF_MINES = 10
  boardElement.style.display = 'inline-grid'
  messageText.style.display = 'block'
  buttons.style.display = 'none'
  board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)

  console.log(NUMBER_OF_MINES)
  board.forEach(row => {
    row.forEach(tile => {
      boardElement.append(tile.element)
      tile.element.addEventListener("click", () => {
        revealTile(board, tile)
        checkGameEnd()
      })
      tile.element.addEventListener("contextmenu", e => {
        e.preventDefault()
        markTile(tile)
        listMinesLeft()
      })
    })
  })
  boardElement.style.setProperty("--size", BOARD_SIZE)
  minesLeftText.textContent = NUMBER_OF_MINES

  function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
      return (
        count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
      )
    }, 0)

    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
  }

  function checkGameEnd() {
    const win = checkWin(board)
    const lose = checkLose(board)

    if (win || lose) {
      boardElement.addEventListener("click", stopProp, { capture: true })
      boardElement.addEventListener("contextmenu", stopProp, { capture: true })
    }

    if (win) {
      messageText.textContent = "You Win"
      messageText.style.color = 'Green'
    }
    if (lose) {
      messageText.textContent = "You Lose"
      board.forEach(row => {
        row.forEach(tile => {
          if (tile.status === TILE_STATUSES.MARKED) markTile(tile)
          if (tile.mine) revealTile(board, tile)
        })
      })
    }
  }

  function stopProp(e) {
    e.stopImmediatePropagation()
  }
})



showBoardLevelMedium.addEventListener('click', () => {
  NUMBER_OF_MINES = 20
  boardElement.style.display = 'inline-grid'
  messageText.style.display = 'block'
  buttons.style.display = 'none'
  board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)

  console.log(NUMBER_OF_MINES)
  board.forEach(row => {
    row.forEach(tile => {
      boardElement.append(tile.element)
      tile.element.addEventListener("click", () => {
        revealTile(board, tile)
        checkGameEnd()
      })
      tile.element.addEventListener("contextmenu", e => {
        e.preventDefault()
        markTile(tile)
        listMinesLeft()
      })
    })
  })
  boardElement.style.setProperty("--size", BOARD_SIZE)
  minesLeftText.textContent = NUMBER_OF_MINES

  function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
      return (
        count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
      )
    }, 0)

    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
  }

  function checkGameEnd() {
    const win = checkWin(board)
    const lose = checkLose(board)

    if (win || lose) {
      boardElement.addEventListener("click", stopProp, { capture: true })
      boardElement.addEventListener("contextmenu", stopProp, { capture: true })
    }

    if (win) {
      messageText.textContent = "You Win"
      messageText.style.color = 'Green'
    }
    if (lose) {
      messageText.textContent = "You Lose"
      board.forEach(row => {
        row.forEach(tile => {
          if (tile.status === TILE_STATUSES.MARKED) markTile(tile)
          if (tile.mine) revealTile(board, tile)
        })
      })
    }
  }

  function stopProp(e) {
    e.stopImmediatePropagation()
  }



})

showBoardLevelHard.addEventListener('click', () => {
  NUMBER_OF_MINES = 30
  boardElement.style.display = 'inline-grid'
  messageText.style.display = 'block'
  buttons.style.display = 'none'
  board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)

  console.log(NUMBER_OF_MINES)
  board.forEach(row => {
    row.forEach(tile => {
      boardElement.append(tile.element)
      tile.element.addEventListener("click", () => {
        revealTile(board, tile)
        checkGameEnd()
      })
      tile.element.addEventListener("contextmenu", e => {
        e.preventDefault()
        markTile(tile)
        listMinesLeft()
      })
    })
  })
  boardElement.style.setProperty("--size", BOARD_SIZE)
  minesLeftText.textContent = NUMBER_OF_MINES

  function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
      return (
        count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
      )
    }, 0)

    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
  }

  function checkGameEnd() {
    const win = checkWin(board)
    const lose = checkLose(board)

    if (win || lose) {
      boardElement.addEventListener("click", stopProp, { capture: true })
      boardElement.addEventListener("contextmenu", stopProp, { capture: true })
    }

    if (win) {
      messageText.textContent = "You Win"
      messageText.style.color = 'Green'
    }
    if (lose) {
      messageText.textContent = "You Lose"
      board.forEach(row => {
        row.forEach(tile => {
          if (tile.status === TILE_STATUSES.MARKED) markTile(tile)
          if (tile.mine) revealTile(board, tile)
        })
      })
    }
  }

  function stopProp(e) {
    e.stopImmediatePropagation()
  }
})
