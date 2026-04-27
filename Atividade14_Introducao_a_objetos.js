function exibirPerfil (usuario){

    let mensagemDeTexto = ""
    if (usuario.idade < 18){
        mensagemDeTexto = "Erro: Apenas maiores de idade"
    }
    else{
        mensagemDeTexto = `O colaborador ${usuario.nome} tem ${usuario.idade} anos e ocupa o cargo de ${usuario.cargo}.`
    }
    return mensagemDeTexto
}

const funcionario1 = {

    nome: "Fernando",
    idade: 20,
    cargo: "Estagiário Backend"
}

const funcionario2 = {

    nome: "Lucas",
    idade: 16,
    cargo: "Aprendiz"
}

console.log(exibirPerfil(funcionario1))
console.log(exibirPerfil(funcionario2))