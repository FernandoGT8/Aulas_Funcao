function finalizarPedido(pedido, tamanhoNome) {
    if (pedido.valorProduto <= 0) {
        return "Pedido inválido"
    }

    if (pedido.estadoDestino === "") {
        return "Destino inválido"
    }

    let valorDesconto = 0

    if (pedido.cupom === "DESCONTO10") {
        valorDesconto = pedido.valorProduto * 0.1
    } else if (pedido.cupom === "DESCONTO20") {
        valorDesconto = pedido.valorProduto * 0.2
    }

    let valorFrete = 0

    if (pedido.valorProduto > 200) {
        valorFrete = 0
    } else if (pedido.estadoDestino === "SP") {
        valorFrete = 15
    } else if (pedido.estadoDestino === "RJ") {
        valorFrete = 20
    } else {
        valorFrete = 30
    }

    const valorTotal = pedido.valorProduto - valorDesconto + valorFrete

    const nomeFormatado = pedido.nomeProduto.padEnd(tamanhoNome)
    const totalFormatado = valorTotal.toFixed(2).padStart(7)
    const freteFormatado = valorFrete.toFixed(2).padStart(6)
    const cupomFormatado = pedido.cupom.padEnd(10)

    return `Produto: ${nomeFormatado} | Total: R$ ${totalFormatado} | Frete: R$ ${freteFormatado} | Cupom aplicado: ${cupomFormatado}`
}

function listarPedidosFinalizados(pedidos) {
    const maiorNome = Math.max(...pedidos.map(pedido => pedido.nomeProduto.length))
    const resultados = []

    for (let i = 0; i < pedidos.length; i++) {
        const pedido = pedidos[i]
        const resultado = finalizarPedido(pedido, maiorNome)

        resultados.push(resultado)
    }

    return resultados
}

const pedidos = [
    {
        nomeProduto: "Monitor Gamer",
        valorProduto: 899.90,
        estadoDestino: "MG",
        cupom: "DESCONTO10"
    },
    {
        nomeProduto: "Mousepad",
        valorProduto: 50.00,
        estadoDestino: "SP",
        cupom: "DESCONTO20"
    },
    {
        nomeProduto: "Pendrive",
        valorProduto: 30.00,
        estadoDestino: "SC",
        cupom: ""
    }
]

console.log(listarPedidosFinalizados(pedidos))