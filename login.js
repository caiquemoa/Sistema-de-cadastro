const users = JSON.parse(localStorage.getItem('users')) ?? [];

function logar() {
  const user = document.getElementById("user").value
  const password = document.getElementById("pass").value
  const localUsers = JSON.parse(localStorage.getItem('users'))

  if (checarLogin(user, password, localUsers)) {
      alert("usuario logado")
  } else {
      alert("Usuario ou senha invalida")
  }

}

function checarLogin(user, pass, localUsers) {
  //!! retorna boolean
  return !!localUsers.find(usuario => usuario.usuario === user && usuario.senha === pass)
}


function showPass() {
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#pass');
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