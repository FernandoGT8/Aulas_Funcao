function criarcontador(){
    let contador = 0

    return function(){
        contador++
        return contador
    }
}

const contar = criarcontador()

console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())

/*Ponto crítico

Mesmo depois que criarContador() terminou, a função interna continua com acesso a contador.

Isso é closure.

Para que serve
encapsular estado
esconder variáveis internas
evitar estado global
construir factories*/