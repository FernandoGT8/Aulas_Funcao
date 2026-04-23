const usuario = {
    nome: "Bruno",
    saudacao() {
        return `Olá, ${this.nome}`
    }
}

console.log(usuario.saudacao())

/*O que this significa aqui

Nesse caso, this aponta para o objeto que chamou o método.*/