const produtos = [
    { nome: "Teclado", preco: 100, estoque: 5 },
    { nome: "Mouse", preco: 50, estoque: 0 },
    { nome: "Monitor", preco: 800, estoque: 2 },
    { nome: "Cadeira", preco: 600, estoque: 10 }
]

const resultado = produtos.filter(function(produto){
    return produto.estoque < 5

}).map(function(produto){
    return produto.nome
})

console.log(resultado)