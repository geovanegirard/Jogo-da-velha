

criarJogo('teste')
function criarJogo(idElemento) {
    const mainContainer = document.getElementById(idElemento);
    const containerJogo = document.createElement("div")

    //criar a Coluna 1 e seus dados
    const divColuna1 = document.createElement("div")
    const dado11 = document.createElement("div")
    dado11.innerHTML = '1'
    const dado12 = document.createElement("div")
    dado12.innerHTML = '4'
    const dado13 = document.createElement("div")
    dado13.innerHTML = '7'

    //criar a Coluna 2 e seus dados
    const divColuna2 = document.createElement("div")
    const dado21 = document.createElement("div")
    dado21.innerHTML = '2'
    const dado22 = document.createElement("div")
    dado22.innerHTML = '5'
    const dado23 = document.createElement("div")
    dado23.innerHTML = '8'

    //criar a Coluna 3 e seus dados
    const divColuna3 = document.createElement("div")
    const dado31 = document.createElement("div")
    dado31.innerHTML = '3'
    const dado32 = document.createElement("div")
    dado32.innerHTML = '6'
    const dado33 = document.createElement("div")
    dado33.innerHTML = '9'

    //cria a primeira Coluna
    divColuna1.appendChild(dado11).classList.add("dado")
    divColuna1.appendChild(dado12).classList.add("dado")
    divColuna1.appendChild(dado13).classList.add("dado")

    //cria a segunda Coluna
    divColuna2.appendChild(dado21).classList.add("dado")
    divColuna2.appendChild(dado22).classList.add("dado")
    divColuna2.appendChild(dado23).classList.add("dado")
    //cria a terceira Coluna

    divColuna3.appendChild(dado31).classList.add("dado")
    divColuna3.appendChild(dado32).classList.add("dado")
    divColuna3.appendChild(dado33).classList.add("dado")

    //adiciona as Colunas na div principal
    containerJogo.appendChild(divColuna1)
    containerJogo.appendChild(divColuna2)
    containerJogo.appendChild(divColuna3)


    containerJogo.children[0].classList.add('coluna-1')
    containerJogo.children[1].classList.add('coluna-2')
    containerJogo.children[2].classList.add('coluna-3')

    //usar o parametro da função
    mainContainer.appendChild(containerJogo).classList.add('containerJogo')
}

const botoes = document.getElementsByClassName('dado')

const arrayX = []
const arrayY = []
let vez = 0
for (const botao of botoes) {
    const conteudo = botao.innerHTML
    botao.addEventListener('click', () => {
        console.log('VEZ->  ',vez)
        
        if (vez % 2 == 0) {
            if (!arrayX.includes(conteudo)) {
                arrayX.push(conteudo)
                botao.style.backgroundColor = 'red'
                botao.classList.add('testeaqui')

            } 
        } else {
            if (!arrayY.includes(conteudo)) {
                arrayY.push(botao.innerHTML)
                botao.style.backgroundColor = 'green'
                botao.disabled = true

            }
        }
        vez++
        console.log('array X: ',arrayX)
        console.log('array Y: ',arrayY)

    })
}

let player1, player2 = {
    'nome': '',
    'vitorias': 0,
    'derrotas': 0,
    'empates': 0,
}

function jogo(p1, p2) {
    const escolhaX = []
    const escolhaY = []



}