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
    let gameActive = false;

    startGame();

    function startGame() {
        cells.forEach(cell => {
            cell.innerText = '';
        });
        gameActive = true;
        playRound();
    }

    function playRound() {
        if (!gameActive) return;
        
        const emptyCells = [...cells].filter(cell => cell.innerText === '');
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        placeMark(randomCell);

        if (checkWin(currentPlayer)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            setTimeout(playRound, 500); // Delay para visualização
        }
    }

    function placeMark(cell) {
        cell.innerText = currentPlayer;
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
            console.log('Draw!');
        } else {
            console.log(`${currentPlayer} wins!`);
        }
        gameActive = false;
    }

    function isDraw() {
        return [...cells].every(cell => {
            return cell.innerText !== '';
        });
    }

    restartButton.addEventListener('click', startGame);
});
