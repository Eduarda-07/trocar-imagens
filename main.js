//serve para mostrar os erros ocultos no terminal
"use strict"

const botaoTrocarImg = document.getElementById('trocar-imagem')

const imagens = [
    'url(./imgs/por-do-sol01.jpg)',
    'url(./imgs/por-do-sol02.jpg)',
    'url(./imgs/por-do-sol03.webp)',
    'url(./imgs/por-do-sol04.jpg)',
    'url(./imgs/por-do-sol05.jpg)'
]

let contador = 0

function trocarImg (){

        // o simbolo de % garante que o contador não seja maior que o número da array 
        // e faz com que o contador reinicie, criando assim um loop
        contador = (contador + 1) % imagens.length

        //essa linha altera o background no style do body
        document.body.style.backgroundImage = imagens[contador]

        //outra opção
        //tudo que estiver usando a variável "--imagem-fundo" no html inteiro é mudadada pela ação (setProperty)
            
            // document.documentElement.style.setProperty('--fundo-imagem', imagens[contador])

}

botaoTrocarImg.addEventListener('click', trocarImg)