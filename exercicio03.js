/**
 * Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
 */
const promt = require('prompt-sync')()

let nota = Number(promt('Imforme a nota para avaliaçao: '))

if(nota >=0){
   
    if(nota < 5){

        console.log('Reprovado')

    }else if(nota >=5 && nota <=6){

        console.log('Recuperação')

    }else if(nota > 6){
        console.log('Aprovado')
    }
    
}else{
        console.log('Informe apenas valores positivos')
}
 