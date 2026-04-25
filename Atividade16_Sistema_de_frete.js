function calcularFrete (pedido){
    let valorFrete = 0

    if(pedido.valorProduto > 200){
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

    const valorTotal = valorFrete + pedido.valorProduto 

    return `Pedido: ${pedido.nomeProduto} | Total: ${valorTotal.toFixed(2)} (Frete: R$ ${valorFrete.toFixed(2)})`
}

const pedido1 = {
    nomeProduto: "Monitor Gamer",
    valorProduto: 899.90,
    estadoDestino: "MG"
}

const pedido2 = {
    nomeProduto: "Mousepad",
    valorProduto: 50.00,
    estadoDestino: "SP"
}

const pedido3 = {
    nomeProduto: "Pendrive",
    valorProduto: 30.00,
    estadoDestino: "SC"
}

console.log(calcularFrete(pedido1)); // Deve ser frete GRÁTIS por causa do valor.
console.log(calcularFrete(pedido2)); // Deve cobrar R$ 15.00 de frete.
console.log(calcularFrete(pedido3)); // Deve cobrar R$ 30.00 de frete.