

criarJogo('teste')
function criarJogo(idElemento) {
    const mainContainer = document.getElementById(idElemento);
    const containerJogo = document.createElement("div")

    //criar a Coluna 1 e seus dados
    const divColuna1 = document.createElement("div")
    const dado11 = document.createElement("div")
    dado11.setAttribute('data-linha', '1')
    dado11.setAttribute('data-coluna', '1')
    //dado11.innerHTML = '1'
    const dado12 = document.createElement("div")
    dado12.setAttribute('data-linha', '2')
    dado12.setAttribute('data-coluna', '1')
    // dado12.innerHTML = '4'
    const dado13 = document.createElement("div")
    dado13.setAttribute('data-linha', '3')
    dado13.setAttribute('data-coluna', '1')
    // dado13.innerHTML = '7'

    //criar a Coluna 2 e seus dados
    const divColuna2 = document.createElement("div")
    const dado21 = document.createElement("div")
    dado21.setAttribute('data-linha', '1')
    dado21.setAttribute('data-coluna', '2')
    // dado21.innerHTML = '2'
    const dado22 = document.createElement("div")
    dado22.setAttribute('data-linha', '2')
    dado22.setAttribute('data-coluna', '2')
    //dado22.innerHTML = '5'
    const dado23 = document.createElement("div")
    dado23.setAttribute('data-linha', '3')
    dado23.setAttribute('data-coluna', '2')
    //dado23.innerHTML = '8'

    //criar a Coluna 3 e seus dados
    const divColuna3 = document.createElement("div")
    const dado31 = document.createElement("div")
    dado31.setAttribute('data-linha', '1')
    dado31.setAttribute('data-coluna', '3')
    //dado31.innerHTML = '3'
    const dado32 = document.createElement("div")
    dado32.setAttribute('data-linha', '2')
    dado32.setAttribute('data-coluna', '3')
    //dado32.innerHTML = '6'
    const dado33 = document.createElement("div")
    dado33.setAttribute('data-linha', '3')
    dado33.setAttribute('data-coluna', '3')
    //dado33.innerHTML = '9'

    //cria a primeira Coluna
    divColuna1.appendChild(dado11).classList.add("dado", '1')
    divColuna1.appendChild(dado12).classList.add("dado", '4')
    divColuna1.appendChild(dado13).classList.add("dado", '7')

    //cria a segunda Coluna
    divColuna2.appendChild(dado21).classList.add("dado", '2')
    divColuna2.appendChild(dado22).classList.add("dado", '5')
    divColuna2.appendChild(dado23).classList.add("dado", '8')
    //cria a terceira Coluna

    divColuna3.appendChild(dado31).classList.add("dado", '3')
    divColuna3.appendChild(dado32).classList.add("dado", '6')
    divColuna3.appendChild(dado33).classList.add("dado", '9')

    //adiciona as Colunas na div principal
    containerJogo.appendChild(divColuna1)
    containerJogo.appendChild(divColuna2)
    containerJogo.appendChild(divColuna3)


    containerJogo.children[0].classList.add('coluna-1')
    containerJogo.children[1].classList.add('coluna-2')
    containerJogo.children[2].classList.add('coluna-3')



    //usar o parametro da função
    mainContainer.appendChild(containerJogo).classList.add('containerJogo')

    const vitplayer1 = document.createElement("div")
    const empt = document.createElement("div")
    const vitplayer2 = document.createElement("div")
    const placar = document.createElement("div")
    placar.appendChild(vitplayer1).classList.add('vitplayer1')
    placar.appendChild(empt).classList.add('empt')
    placar.appendChild(vitplayer2).classList.add('vitplayer2')
    mainContainer.appendChild(placar).classList.add('placar')
}


const botoes = document.getElementsByClassName('dado')

let player1 = {
    nome: 'Player 1',
    vitorias: 0,
    derrotas: 0,
    empates: 0,
};

let player2 = {
    nome: 'Player 2',
    vitorias: 0,
    derrotas: 0,
    empates: 0,
};
const arrayX = []
const arrayY = []
let vez = 0
let matriz = [["", "", ""],
["", "", ""],
["", "", ""]
]
for (const botao of botoes) {
    botao.addEventListener('click', () => {
        let esteRound = round(vez)
        let linha = botao.dataset.linha
        let coluna = botao.dataset.coluna
        if (botao.innerHTML == "") {
            if (esteRound) {
                botao.innerHTML = 'X'
                matriz[linha - 1][coluna - 1] = 'X'
                vez++
            } else {
                botao.innerHTML = 'O'
                matriz[linha - 1][coluna - 1] = 'O'
                vez--
            }
            if (vencedor(botao.innerHTML)) {
                atualiza();
            } else {
                // Se não houve vencedor, verificar se é empate
                if (empate()) {
                    console.log('Empatexsfdhg');
                    limpa();
                }
            }
        }

    })
}
function empate() {
    // Verifica se todos os espaços estão preenchidos
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] === '') {
                return false; // Ainda há espaços vazios, não é empate
            }
        }
    }
    let empt = document.getElementsByClassName('empt')[0]
    player1.empates++
    empt.innerHTML = player1.empates
    atualiza();
}


function vencedor(simbolo) {

    for (let i = 0; i < 3; i++) {
        //linhas
        if (matriz[i][0] == simbolo && matriz[i][1] == simbolo && matriz[i][2] == simbolo) {
            console.log(`Vencedor na linha ${i + 1}!`);
            vitorias(simbolo);
            atualiza();
        }
    }

    //colunas
    for (let j = 0; j < 3; j++) {
        if (matriz[0][j] == simbolo && matriz[1][j] == simbolo && matriz[2][j] == simbolo) {
            console.log(`Vencedor na coluna ${j + 1}!`);
            vitorias(simbolo);
            atualiza();
        }
    }

    //d1
    if (matriz[0][0] == simbolo && matriz[1][1] == simbolo && matriz[2][2] == simbolo) {
        console.log('Vencedor na diagonal principal!');
        vitorias(simbolo)
        atualiza()
    }

    //d2
    if (matriz[0][2] == simbolo && matriz[1][1] == simbolo && matriz[2][0] == simbolo) {
        console.log('Vencedor na diagonal secundária!')
        vitorias(simbolo)
        atualiza()
    }
}


function vitorias(simbolo) {
    let vitplayer1 = document.getElementsByClassName('vitplayer1')[0]
    let vitplayer2 = document.getElementsByClassName('vitplayer2')[0]
    
    if (simbolo == 'X') {
        player1.vitorias++
        player2.derrotas++
        vitplayer1.innerHTML = player1.vitorias
    } else if (simbolo == 'O') {
        player2.vitorias++
        player1.derrotas++
        vitplayer2.innerHTML = player2.vitorias
    }
    console.log(player1.vitorias)
}


function round(vez) {
    if (vez == 0) {
        return true
    } else {
        return false
    }
}

function limpa() {
    //limpa a matriz
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = ''
        }
    }

    //limpa o html p poder iniciar novamente
    const botoes = document.getElementsByClassName('dado');
    for (const botao of botoes) {
        botao.disabled = true;
        botao.innerHTML = '';
        vez = 0
    }
}

function atualiza() {
    setTimeout(() => {
        limpa()
    }, 200);
}

/*

*/