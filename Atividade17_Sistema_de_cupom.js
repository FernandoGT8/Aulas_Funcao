function finalizarPedido (pedido){
    
    if (pedido.valorProduto <= 0){
        return "Pedido inválido"
    }
    
    if (pedido.estadoDestino === ""){
        return "Destino inválido"
    }
    
    let valorDesconto = 0

    if (pedido.cupom === "DESCONTO10"){
        valorDesconto = pedido.valorProduto * 0.1
    }
    
    else if (pedido.cupom === "DESCONTO20"){
        valorDesconto = pedido.valorProduto * 0.2
    }

    let valorFrete = 0

    if (pedido.valorProduto > 200){
        valorFrete = 0
    }

    else if (pedido.estadoDestino === "SP"){
        valorFrete = 15
    }

    else if (pedido.estadoDestino === "RJ"){
        valorFrete = 20
    }

    else {
        valorFrete = 30
    }

    const valorTotal = pedido.valorProduto - valorDesconto + valorFrete

    return `Produto: ${pedido.nomeProduto} | Total: R$ ${valorTotal.toFixed(2)} | Frete: R$ ${valorFrete.toFixed(2)} | Cupom aplicado: ${pedido.cupom}`
}

const pedido1 = {
    nomeProduto: "Monitor Gamer",
    valorProduto: 899.90,
    estadoDestino: "MG",
    cupom: "DESCONTO10"
}

const pedido2 = {
    nomeProduto: "Mousepad",
    valorProduto: 50.00,
    estadoDestino: "SP",
    cupom: "DESCONTO20"

}

const pedido3 = {
    nomeProduto: "Pendrive",
    valorProduto: 30.00,
    estadoDestino: "SC",
    cupom: "DESCONTO20"
}

const pedido4 = {
    nomeProduto: "Teclado",
    valorProduto: 300.00,
    estadoDestino: "SP",
    cupom: "DESCONTO10"
}

console.log(finalizarPedido(pedido1))
console.log(finalizarPedido(pedido2))
console.log(finalizarPedido(pedido3))
console.log(finalizarPedido(pedido4))