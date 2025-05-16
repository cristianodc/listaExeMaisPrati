/**
 * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
  e escreve-los em ordem crescente.
 */

  const prompt = require('prompt-sync')()

  let val01 = Number(prompt('Informe valor 01: '))
  let val02 = Number(prompt('Informe valor 02: '))

  if(val01 > val02){
     console.log('Ordenados: ',val01 , val02)
  }else{
     console.log('Ordenados: ',val02 , val01)
  }