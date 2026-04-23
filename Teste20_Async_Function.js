function esperar (ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function executar() {
    console.log("Início")
    await esperar (5000)
    console.log("Fim")
}

executar()

/*O que isso faz
esperar devolve uma Promise
await pausa a execução da função assíncrona até a promise resolver
Para que serve
chamadas HTTP
leitura de dados
operações assíncronas em geral*/