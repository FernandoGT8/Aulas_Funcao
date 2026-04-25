function calcularDescontoProduto(produto) {
    let porcentagem = 0;

    // 1. Decisão: Apenas define o valor da porcentagem
    if (produto.categoria === "Eletrônicos") {
        porcentagem = 10;
    } else if (produto.categoria === "Vestuário") {
        porcentagem = 5;
    }

    // 2. Ação: O cálculo é feito uma única vez para todos os casos
    const precoComDesconto = produto.preco * (1 - porcentagem / 100);

    // 3. Saída: Montagem da string
    return `O produto ${produto.nome} custa R$ ${precoComDesconto.toFixed(2)} com desconto de ${porcentagem}%.`;
}


const item1 = {
    nome: "Teclado Mecânico",
    preco: 200,
    categoria: "Eletrônicos"
}

const item2 = {
    nome: "Camiseta Algodão",
    preco: 80,
    categoria: "Vestuário"
}

const item3 = {
    nome: "Copo Térmico",
    preco: 50,
    categoria: "Utensílios"
}

console.log(calcularDescontoProduto(item1))
console.log(calcularDescontoProduto(item2))
console.log(calcularDescontoProduto(item3))
