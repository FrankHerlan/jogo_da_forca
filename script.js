//Variaveis das palavras

var palavras = ["amigo", "lealdade", "companheiro", "amizade", "amor"]
var tabuleiro = document.getElementById("forca").getContext("2d")
var letras = [];
var palavraCorreta = ""; 
var erros = 9;

//Função de Seleção de Palavras
function escolherPalavraSecreta() {
    var palavra = palavras[Math.floor(Math.random()*palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
    
}

//Desenhando os traços no canva
function escreverTracinhos() {
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginpath()
    var eixo = 600/palavraSecreta.length
    for (let i=0; palavraSecreta.length; i++){
        tabuleiro.moveTo(500+(eixo*i),640)
        tabuleiro.lineTo(550+(eixo*i),640)
    }
    tabuleiro.stroke()
    tabuleiroclosePath()
    
}escreverTracinhos(escolherPalavraSecreta())



