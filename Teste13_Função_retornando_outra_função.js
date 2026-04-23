function criarmultiplicador(fator){
    return function (numero){
        return numero * fator
    }
}

const triplicar = criarmultiplicador(3)
const duplicar = criarmultiplicador(2)

console.log(triplicar(10))
console.log(duplicar(10))

/*O que aconteceu

criarMultiplicador(3) devolveu uma nova função já configurada com fator = 3.

Isso é muito usado para:

configuração
personalização
composição
APIs funcionais*/