// SUBSTITUÍDO POR FUNÇÃO exibirTextoNaTela
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// ARMAZENAR  VALOR FUNÇÃO gerarNumero EM VARIÀVEL numeroSecreto
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

// CRIANDO FUNÇÃO
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
campo.innerHTML = texto;
}

// CRIANDO FUNÇÃO
function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

// BOOLEANO FALSE - TRUE
function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor..');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior..');
        }
        tentativas++;
        limparCampo();
    }
}

//FUNÇÃO gerarNumero
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// FUNÇÂO LIMPAR CAMPO
function limparCampo() {
chute = document.querySelector('input');
chute.value = '';
}

// FUNÇÂO REINÍCIO DO JOGO
function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}