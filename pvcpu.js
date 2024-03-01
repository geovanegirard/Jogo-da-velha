document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('restart-button');
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let currentPlayer = 'X';
    let gameActive = true;

    startGame();

    function startGame() {
        cells.forEach(cell => {
            cell.innerText = '';
            cell.addEventListener('click', handleClick, { once: true });
        });
        setHoverClass();
        gameActive = true;
    }

    function handleClick(event) {
        const cell = event.target;
        if (!gameActive || cell.innerText !== '') return;
        placeMark(cell);
        if (checkWin(currentPlayer)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                setTimeout(cpuTurn, 500);
            }
            setHoverClass();
        }
    }

    function placeMark(cell) {
        cell.innerText = currentPlayer;
    }

    function setHoverClass() {
        board.classList.remove('x');
        board.classList.remove('o');
        if (currentPlayer === 'X') {
            board.classList.add('x');
        } else {
            board.classList.add('o');
        }
    }

    function checkWin(player) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cells[index].innerText === player;
            });
        });
    }

    function endGame(draw) {
        if (draw) {
            alert('Draw!');
        } else {
            alert(`${currentPlayer} wins!`);
        }
        gameActive = false;
    }

    function isDraw() {
        return [...cells].every(cell => {
            return cell.innerText !== '';
        });
    }

    function cpuTurn() {
        const emptyCells = [...cells].filter(cell => cell.innerText === '');
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        handleClick({ target: randomCell });
    }

    restartButton.addEventListener('click', startGame);
});
