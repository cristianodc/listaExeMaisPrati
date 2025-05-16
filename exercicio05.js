/**
 * Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
 */


const prompt =  require('prompt-sync')()

let peso   = Number(prompt('Imforme  o PESO em KG para fazer  avaliaçao: __'))
let altura = Number(prompt('Imforme a ALTURA  em M para fazer avaliaçao: __'))

let imc = (peso / (altura * altura)).toFixed(2)


if(imc <= 18.5){
    console.log('BAIXO PESO SEU IMC É :', imc)
}else if(imc > 18.5 && imc < 25 ){
    console.log('PESO NORMAL SEU IMC É :',imc)
}else if(imc >= 25 && imc < 30 ){
    console.log('SOBREPESO SEU IMC É : ', imc)
}else if(imc > 30 ){
    console.log('OBESIDADE SEU IMC É : ', imc)
}


