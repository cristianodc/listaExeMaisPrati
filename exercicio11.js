/**
 * Escreva um programa que solicita ao usuário 5 números e calcula a soma total
   utilizando um loop for.
 */

   const   prompt = require('prompt-sync')()

   let soma=0

   for(let i=0; i <=4 ; i++){

        soma += Number(prompt('Infome o nro para soma: '))
    }

    console.log('O total foi: ', soma)