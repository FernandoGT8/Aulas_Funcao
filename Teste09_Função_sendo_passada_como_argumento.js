function executarOperacao(a, b, operacao){
    return operacao(a, b)
}

function somar(x, y){
    return x + y
}

function subtrair(x, y){
    return x - y
}

console.log(executarOperacao(10, 5, somar))
console.log(executarOperacao(10, 5, subtrair))

/*O que isso prova

Em JS, função é valor.
Você pode passar função como argumento para outra função.

Isso é a base de:

callbacks
eventos
programação funcional
assíncrono*/