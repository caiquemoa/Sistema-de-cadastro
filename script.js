const users = JSON.parse(localStorage.getItem('users')) ?? []
// codigo do registro.
function criar() {
    const email = document.getElementById("email").value
    const user = document.getElementById("login").value
    const senha = document.getElementById("senha").value
    const confirmarSenha = document.getElementById("confirmarsenha").value

    if (senha != confirmarSenha) {
        for (i = 0; i <= document.getElementsByClassName("errou").length - 1; i++) {
            document.getElementsByClassName("errou")[i].innerHTML = "Senhas diferentes"
            console.log(document.getElementsByClassName("errou"))
        }

        return
    }

    if (verificarEmail(email)) {
        alert("Email ja cadastrado")
        return
    }

    const usuarios = {
        email: email,
        usuario: user,
        senha: senha,
    }

    users.push(usuarios)

    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = "./login.html"

}

function verificarEmail(email) {
    // !! retorna em boolean
    const localUsers = JSON.parse(localStorage.getItem('users'))
    console.log(email, localUsers)
    if (localUsers && localUsers.length > 0) {
        //procura no array se tem um email igual ja cadastrado
        return Boolean(localUsers.find(tem => tem.email === email))
    }
    return false
}

// codigo de login
function logar() {
    const user = document.getElementById("user").value
    const password = document.getElementById("pass").value
    const localUsers = JSON.parse(localStorage.getItem('users'))
    console.log(localUsers)
    if (checarLogin(user, password, localUsers)) {
        alert("usuario logado")
    } else {
        alert("Usuario ou senha invalida")
    }

}
function checarLogin(user, pass, localUsers) {
    //!! é boolean
    return !!localUsers.find(usuario => usuario.usuario === user && usuario.senha === pass)
}