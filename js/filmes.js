// filmes.js - Carrega filmes do banco PouchDB
const db = new PouchDB('streamingDB');

// Função para carregar filmes na página inicial
function carregarFilmes() {
  db.allDocs({ include_docs: true }).then(result => {
    const filmes = result.rows.map(row => row.doc);
    exibirFilmes(filmes);
  }).catch(err => {
    console.error('Erro ao carregar filmes:', err);
  });
}

// Função para exibir filmes na página
function exibirFilmes(filmes) {
  const container = document.getElementById('filmes-destaque');
  filmes.forEach(filme => {
    const col = document.createElement('div');
    col.className = "col-6 col-sm-4 col-md-3 mb-4";
    col.innerHTML = `
      <div class="card bg-black border-0">
        <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
        <div class="card-body p-2">
          <h6 class="card-title text-white">${filme.titulo}</h6>
        </div>
      </div>`;
    container.appendChild(col);
  });
}

window.onload = carregarFilmes;  // Carrega filmes quando a página for aberta
