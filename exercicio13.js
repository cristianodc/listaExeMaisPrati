/**
 * Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
  a média aritmética desses números.
 */

  const prompt = require('prompt-sync')()

  let nro = 0;
  let counter = 0;
  let aux = 1
   let media = 0

  do{

        counter++;
        aux = Number(prompt('Informe a sequencia de numero para a media e digite 0 para sair:__ '))
        nro += aux
        console.log('SOMA : ', nro)

   }while(aux !== 0)
 
      media = (nro / counter)
    console.log('A media foi : ', media.toFixed(2))