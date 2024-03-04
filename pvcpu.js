
// Evento acionado quando o DOM é completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona os elementos HTML relevantes
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('restart-button');

    // Define as combinações vencedoras
    const combinacoes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let jogadorAtual = 'X';
    let gameActive = true;

    startGame();

    // Inicia um novo jogo
    function startGame() {
        cells.forEach(cell => {

            // Limpa o conteúdo
            cell.innerText = '';

            // Garante que o evento de clique ocorro uma vez
            cell.addEventListener('click', handleClick, { once: true });
        });

        // Define a classe de destaque
        setHoverClass();
        gameActive = true;
    }

    function handleClick(event) {
        const cell = event.target;

        // Verifica se o jogo está ativo ou se a célula já está marcada
        if (!gameActive || cell.innerText !== '') return;

        // Marca com o símbolo do jogador atual
        placeMark(cell);

        // Verifica se houve vitória, empate ou passa a vez para o próximo jogador
        if (checkWin(jogadorAtual)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
            if (jogadorAtual === 'O') {

                // Delay para a jogado do CPU
                setTimeout(cpuTurn, 500);
            }
            setHoverClass();
        }
    }

    // Marca uma célula com o símbolo do jogador atual
    function placeMark(cell) {
        cell.innerText = jogadorAtual;
    }

    function setHoverClass() {
        board.classList.remove('x');
        board.classList.remove('o');
        if (jogadorAtual === 'X') {
            board.classList.add('x');
        } else {
            board.classList.add('o');
        }
    }

    // Verifica o jogador que ganhou
    function checkWin(player) {
        return combinacoes.some(combination => {
            return combination.every(index => {
                return cells[index].innerText === player;
            });
        });
    }

    // Função para finalizar o jogo
    function endGame(draw) {
        if (draw) {
            alert('Empate!');
        } else {
            alert(`${jogadorAtual} Ganhou!`);
        }
        gameActive = false;
    }

    // Verifica se deu empate
    function isDraw() {
        return [...cells].every(cell => {
            return cell.innerText !== '';
        });
    }

    //Escolhe aleatoriamente uma célula vazia no tabuleiro e simula um clique
    function cpuTurn() {
        const emptyCells = [...cells].filter(cell => cell.innerText === '');
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        handleClick({ target: randomCell });
    }

    restartButton.addEventListener('click', startGame);
});
