/**
 * Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
 */

const prompt =  require('prompt-sync')()
let opc = 0
do{

    console.log('***********************')
    console.log('MENU DE OPÇOES')
    console.log('OPC 01 para bom dia   :')
    console.log('OPC 02 para boa tarde :')
    console.log('OPC 03 para boa noite :')
    console.log('************************')

    opc = prompt('Imforme a opçao desejada: ')
    
    console.log('------------------------')

    switch(opc)
        {
            case '1':
                console.log('Bom dia')
            break
            case '2':
                console.log('Boa tarde')
            break
            case '3':
                console.log('Boa noite')
            break
            default:
                console.log('Nenhuma das opçes')
            break
        }
    

}while(opc != 0)