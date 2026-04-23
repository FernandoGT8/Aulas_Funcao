function exibirproduto({nome, preço}) {
    return `${nome}: R$ ${preço}`
}

const produto = {nome: "Notebook", preço: 4500, estoque: 8}
console.log(exibirproduto(produto))

/*Vantagem

Você declara exatamente o que a função precisa.*/