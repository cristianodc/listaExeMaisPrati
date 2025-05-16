/**
 * Crie um programa que calcula o fatorial de um número fornecido pelo usuário
   utilizando um loop for ou while.
 */
const prompt = require('prompt-sync')()
let calculoFat = 1
let nro = Number(prompt('Imforme o nro para o calculo fatoria:__'))

if(nro < 0){

    console.log('Nro 0 sem calculo fatoria')
}else if(nro == 0 ){
     console.log('Nro 0 o fatorial é: 1')
}else{

    

    for(let i=1; i <= nro ; i++){
        calculoFat *= i
    }
}

console.log('O calculo do fatoria é : ',calculoFat)