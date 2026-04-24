function analisarPedido(valor, formaPagamento) {
    if (valor <= 0) {
        return "Valor inválido"
    }

    if (formaPagamento !== "dinheiro" && formaPagamento !== "pix" && formaPagamento !== "cartao") {
        return "Forma de pagamento inválida"
    }

    let totalFinal = valor

    if (formaPagamento === "dinheiro") {
        totalFinal = valor * 0.9
    } else if (formaPagamento === "pix") {
        totalFinal = valor * 0.95
    }

    return `Total final: R$ ${totalFinal}`
}

console.log(analisarPedido(100, "dinheiro"))
console.log(analisarPedido(100, "pix"))
console.log(analisarPedido(100, "cartao"))
console.log(analisarPedido(-10, "pix"))
console.log(analisarPedido(100, "boleto"))