
// Evento acionado quando o DOM é completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona os elementos HTML relevantes
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

    // Variáveis de estado
    let jogadorAtual = 'X';
    let gameActive = false;

    startGame();

    // Inicia um novo jogo
    function startGame() {
        cells.forEach(cell => {

            // Limpa o conteúdo
            cell.innerText = '';
        });

        // Define que o jogo está ativo
        gameActive = true;
        playRound();
    }

    function playRound() {
        if (!gameActive) return;
        
        // Filtra as células vazias
        const emptyCells = [...cells].filter(cell => cell.innerText === '');

        // Escolhe uma célula aleatoria
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        // Marca a célula escolhida
        placeMark(randomCell);

        // Verifica se o jogador atual ganhou
        if (checkWin(jogadorAtual)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
            setTimeout(playRound, 500); // Atraso para visualização
        }
    }

    // Marca uma célula com o símbolo do jogador atual
    function placeMark(cell) {
        cell.innerText = jogadorAtual;
    }

    // Verifica o jogador que ganhou
    function checkWin(player) {
        return combinacoes.some(combinacao => {
            return combinacao.every(index => {
                return cells[index].innerText === player;
            });
        });
    }

    // Função para finalizar o jogo
    function endGame(draw) {
        if (draw) {
            console.log('Empate!');
        } else {
            console.log(`${jogadorAtual} Ganhou!`);
        }
        gameActive = false;
    }

    // Verifica se deu empate
    function isDraw() {
        return [...cells].every(cell => {
            return cell.innerText !== '';
        });
    }

    restartButton.addEventListener('click', startGame);
});
