/**
 * Escreva um programa que gera e imprime os primeiros 10 números da sequência de
  Fibonacci utilizando um loop for.
 */

  let nroA = 0
  let nroB = 1
  let prox = 0

  console.log(nroA)
  console.log(nroB)
  for(let i=2; i < 10; i++){
    prox = nroA + nroB
  console.log(prox)
    nroA = nroB
    nroB = prox

  }