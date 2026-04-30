const produtos = [
    { nome: "Teclado", preco: 100 },
    { nome: "Mouse", preco: 50 },
    { nome: "Monitor", preco: 800 },
    { nome: "Cabo USB", preco: 25 }
]

const produtosCaros = produtos.filter(function(produto){
    return produto.preco > 50
    const produtosComDesconto = produtos.map(function(produto){
        return produto.preco * 0.9
    })
})



console.log(produtosCaros)