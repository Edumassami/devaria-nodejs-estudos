const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-vindo iniciaremos um processo para checar se o seu nome está na lista de convidados e se possui os pre-requisitos para o evento.');

readLine.question('Qual o seu nome?', (nome) => {
    switch(nome){
        case 'Eduardo':
        case 'Miguel':
        case 'Ana':
        case 'Marcia':
        case 'Carol':
            return readLine.question('Qual sua idade?', (idade) => {
                if(idade >= 18){
                    console.log(`Seja bem-vindo(a) ${nome}, aproveite o evento!`);
                } else {
                    console.log('Infelizmente voce nao tem idade apropriada para o evento.')
                    return null;
                }
            })
        default:
            console.log('Infelizmente nao encontramos seu nome na lista de convidados');
            return null;
    }
})