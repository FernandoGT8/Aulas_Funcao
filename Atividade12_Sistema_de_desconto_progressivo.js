function calcularTotalPedido(preco, quantidade, desconto) {
    const subtotal = preco * quantidade;
    const fatorDesconto = (100 - desconto) / 100;

    return subtotal * fatorDesconto
}

function aplicarFidelidade (total, tempoCliente){
    if (total <= 0 || tempoCliente <= 0){
        return "Dados inválidos"
    }

    let totalFinal
    
    if (tempoCliente >= 5){
        totalFinal = total * 0.85
    }
    else{
        totalFinal = total * 0.95
    }
    return `Total final com fidelidade: R$ ${totalFinal.toFixed(2)}`
}

const totalBase = calcularTotalPedido(100, 2, 10)

console.log(aplicarFidelidade(totalBase, 6))
console.log(aplicarFidelidade(totalBase, 3))
console.log(aplicarFidelidade(0, 5))