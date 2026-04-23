function criarUsuario(nome, tipo = "Comum"){
    return `${nome} - ${tipo}`
}

console.log(criarUsuario("Carlos"))
console.log(criarUsuario("Ana", "Administradora"))

/*Para que serve

Evitar undefined e simplificar chamadas.*/