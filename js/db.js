// db.js - Inicialização do PouchDB

const db = new PouchDB('streamingDB');  // Cria ou acessa o banco de dados "streamingDB"

// Função para salvar um filme no banco de dados
function salvarFilme(filme) {
  db.put(filme).then(response => {
    console.log('Filme salvo com sucesso:', response);
  }).catch(err => {
    console.error('Erro ao salvar filme:', err);
  });
}

// Função para buscar todos os filmes
function buscarFilmes() {
  return db.allDocs({ include_docs: true }).then(result => {
    return result.rows.map(row => row.doc);
  }).catch(err => {
    console.error('Erro ao buscar filmes:', err);
  });
}

// Função para buscar um filme pelo ID
function buscarFilmePorId(id) {
  return db.get(id).then(doc => {
    return doc;
  }).catch(err => {
    console.error('Erro ao buscar filme:', err);
  });
}
// Função para deletar um filme pelo ID