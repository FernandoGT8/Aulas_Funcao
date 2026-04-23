function calcularTotalPedido(preco, quantidade, desconto) {
    const subtotal = preco * quantidade;
    const fatorDesconto = (100 - desconto) / 100;
    const total = subtotal * fatorDesconto;

    return `Total: R$ ${total}`;
}

console.log(calcularTotalPedido(100, 2, 10));