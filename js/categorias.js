// categorias.js - Filtro de filmes por categoria com PouchDB

function filtrarCategoria(categoria) {
  db.find({ selector: { categoria: categoria } }).then(result => {
    const filmesFiltrados = result.docs;
    exibirFilmes(filmesFiltrados);
  }).catch(err => {
    console.error('Erro ao filtrar filmes:', err);
  });
}

// Função para exibir filmes (geral ou filtrados)
function exibirFilmes(filmes) {
  const container = document.getElementById('filmes-destaque');
  container.innerHTML = ''; // Limpa o conteúdo anterior

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
