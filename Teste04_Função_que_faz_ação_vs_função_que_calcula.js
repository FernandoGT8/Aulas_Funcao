function exibirMensagem(msg){
    console.log(msg)
}
exibirMensagem("Pedido criado")

function calcularDesconto(preco){
    return preco * 0.9
}
const final = calcularDesconto(100)
console.log(`Valor total: R$ ${final}`)

/*Diferença estratégica
função de ação causa efeito colateral
função de cálculo retorna valor

Na prática, funções que retornam valor são mais fáceis de:

testar
reutilizar
combinar*/