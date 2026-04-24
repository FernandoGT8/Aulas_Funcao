function calcularComissao (vendas, meta){
    if (vendas <= 0){
        return "Vendas Inválidas"
    }
    else if (meta <= 0){
        return "Meta Inválida"
    }

    let valor = 0

    if (vendas >= meta){
        valor = vendas * 0.1 
    }
    else {
        valor = vendas * 0.03
    }
    return `Comissão: R$ ${valor}`
}

console.log(calcularComissao(10000, 8000))
console.log(calcularComissao(5000, 8000))
console.log(calcularComissao(0, 8000))
console.log(calcularComissao(5000, 0))