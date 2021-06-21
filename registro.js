const users = JSON.parse(localStorage.getItem('users')) ?? [];
// codigo do registro.
function criar() {
    const email = document.getElementById("email").value
    const user = document.getElementById("login").value
    const senha = document.getElementById("senha").value
    const confirmarSenha = document.getElementById("confirmarsenha").value
    console.log(senha, senha.length)

    if (senha != confirmarSenha) {
        for (let i = 0; i <= document.getElementsByClassName("errou").length - 1; i++) {
            document.getElementsByClassName("errou")[i].innerHTML = "Senhas diferentes"
        }

        return
    }

    if (senha.length < 4 || senha.length > 7) {
        document.getElementsByClassName("errou")[0].innerHTML = "tamanho invalido"
        return
    }

    if (user.length < 4) {
        alert("usuario muito curto")
        return
    }

    if (!validateEmail(email)) {
        alert("Email invalido")
        return
    }

    if (verificarValor(email, "email")) {
        alert("Email ja cadastrado")
        return
    }

    if (verificarValor(user, "user")) {
        alert("Usuario ja cadastrado")
        return
    }

    const usuarios = {
        email: email,
        usuario: user,
        senha: senha,
    }

    users.push(usuarios)

    localStorage.setItem('users', JSON.stringify(users));
    //window.location.href = "./login.html"
}

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}


function verificarValor(value, idparameter) {

  // !! retorna em boolean
  const localUsers = JSON.parse(localStorage.getItem('users'))
  if (localUsers && localUsers.length > 0) {
      switch (idparameter) {
          case 'email':
              //procura no array se tem um email igual ja cadastrado
              return Boolean(localUsers.find(tem => tem.email === value))
          case 'user':
              //procura no array se tem um usuario igual ja cadastrado
              return !!localUsers.find(tem => tem.usuario === value)

      }
  }
  return false
}


function showPass() {
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#senha');
  if (password.getAttribute('type') === 'password') {
      password.setAttribute("type", "text")
      //togglePassword.classList.add('fa-eye-slash')        
  } else {
      password.setAttribute("type", "password")
      //togglePassword.classList.remove('fa-eye-slash')        
  }
  //jeito esperto
  togglePassword.classList.toggle('fa-eye-slash');
}