// auth.js - Lógica de autenticação com PouchDB

// Cria um banco de dados para usuários
const dbUsuarios = new PouchDB('usuariosDB');

// Função para salvar um usuário
function salvarUsuario(usuario) {
  dbUsuarios.put(usuario).then(response => {
    console.log('Usuário salvo com sucesso:', response);
  }).catch(err => {
    console.error('Erro ao salvar usuário:', err);
  });
}

// Função para autenticar o login
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;

  validarLogin(email, senha);
});

function validarLogin(email, senha) {
  // Busca o usuário pelo email
  dbUsuarios.find({ selector: { email: email } }).then(result => {
    if (result.docs.length > 0) {
      const usuario = result.docs[0];
      if (usuario.senha === senha) {
        alert('Login bem-sucedido!');
        window.location.href = 'index.html';  // Redireciona para a página inicial
      } else {
        alert('Senha incorreta!');
      }
    } else {
      alert('Usuário não encontrado!');
    }
  }).catch(err => {
    console.error('Erro ao validar login:', err);
  });
}
