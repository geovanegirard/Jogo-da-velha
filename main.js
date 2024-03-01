

criarJogo('teste')
function criarJogo(idElemento) {
    const mainContainer = document.getElementById(idElemento);
    const containerJogo = document.createElement("div")

    //criar a Coluna 1 e seus dados
    const divColuna1 = document.createElement("div")
    const dado11 = document.createElement("div")
    dado11.setAttribute('linha', '1')
    dado11.setAttribute('coluna', '1')
    //dado11.innerHTML = '1'
    const dado12 = document.createElement("div")
    dado12.setAttribute('linha', '2')
    dado12.setAttribute('coluna', '1')
    // dado12.innerHTML = '4'
    const dado13 = document.createElement("div")
    dado13.setAttribute('linha', '3')
    dado13.setAttribute('coluna', '1')
    // dado13.innerHTML = '7'

    //criar a Coluna 2 e seus dados
    const divColuna2 = document.createElement("div")
    const dado21 = document.createElement("div")
    dado21.setAttribute('linha', '1')
    dado21.setAttribute('coluna', '2')
    // dado21.innerHTML = '2'
    const dado22 = document.createElement("div")
    dado11.setAttribute('linha', '2')
    dado11.setAttribute('coluna', '2')
    //dado22.innerHTML = '5'
    const dado23 = document.createElement("div")
    dado11.setAttribute('linha', '1')
    dado11.setAttribute('coluna', '2')
    //dado23.innerHTML = '8'

    //criar a Coluna 3 e seus dados
    const divColuna3 = document.createElement("div")
    const dado31 = document.createElement("div")
    dado11.setAttribute('linha', '1')
    dado11.setAttribute('coluna', '1')
    //dado31.innerHTML = '3'
    const dado32 = document.createElement("div")
    dado11.setAttribute('linha', '1')
    dado11.setAttribute('coluna', '1')
    //dado32.innerHTML = '6'
    const dado33 = document.createElement("div")
    dado11.setAttribute('linha', '1')
    dado11.setAttribute('coluna', '1')
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
}


const botoes = document.getElementsByClassName('dado')

const arrayX = []
const arrayY = []
let vez = 0
let teste = [   ["", "", ""], 
                ["", "", ""], 
                ["", "", ""]
            ]
for (const botao of botoes) {
    const conteudo = botao.innerHTML
    botao.addEventListener('click', () => {
        let esteRound = round(vez)
        let linha = botao.dataset.linha
        let coluna = botao.dataset.coluna
        if (botao.innerHTML == "") {
            if (esteRound) {
                botao.innerHTML = 'X'
                teste[linha][coluna] = 'X'
                vez++
            } else {
                botao.innerHTML = 'O'
                teste[linha][coluna] = 'O'
                vez--
            }
            vencedor(botao)
        }

    })
}

function vencedor(botao) {
    //teste na posição x for igual ao innerhtml do botao do round atual
    
    let ordem = botao.className.split(' ')[1]
    console.log(teste)
    //teste.replace(ordem, [ordem-1])
    

    


}

function round(vez) {
    if (vez == 0) {
        return true
    } else {
        return false
    }
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

/*
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


        VENCEDOR
         const col1 = document.getElementsByClassName('coluna-1')[0].childNodes
    const col2 = document.getElementsByClassName('coluna-2')[0].childNodes
    const col3 = document.getElementsByClassName('coluna-3')[0].childNodes

    console.log(col1[0])
    console.log(col2[0])
    console.log(col3[0])
    
    console.log(col1[0])
    console.log(col1[1])
    console.log(col1[2])
    
    

    if (col1[2].innerHTML == 'X') {
        console.log('sudhfsdklhglsdglk')
    }
*/