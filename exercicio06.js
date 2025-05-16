/**
 * Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */

const prompt = require('prompt-sync')()

function isTriangulo(ladoA, ladoB, ladoC){

    if(ladoA !== null && ladoB !== null && ladoC !== null){

        if(ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)){

            return true
        }else{
            return false
        }
    }else {
        return false
    }

}

function retornaTipoTriangulo(ladoA, ladoB, ladoC){
    let tipo

    if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        
        tipo = 'ISÓCELES'
    }
    if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){

        tipo = 'ESCALENO'
    }
    if(ladoA == ladoB && ladoB == ladoC && ladoA == ladoC){

        tipo =  'EQUILATERO'
    }

    return tipo
}



 let ladoA = Number(prompt('Imforme o Lado A :'))
 let ladoB = Number(prompt('Imforme o Lado B :'))
 let ladoC = Number(prompt('Imforme o Lado C :'))

 if(isTriangulo(ladoA,ladoB,ladoC)){

    console.log('SEU TRIANGULO É : ', retornaTipoTriangulo(ladoA,ladoB,ladoC))

 }else{
    console.log('DADOS INFORMADOS NÃO CONFEREM COM UM TRIANGULO ')
 }