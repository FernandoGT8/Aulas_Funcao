function somartudo (...numeros){
    return numeros.reduce((total, n) => total + n, 0)
}

console.log(somartudo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log (somartudo(10, 20 ,30, 5))

/* O que ...numeros faz

Agrupa todos os argumentos em um array.

Isso é melhor que depender de padrões antigos como arguments.*/