// busca.js - Filtra filmes por título
document.getElementById('busca').addEventListener('input', function(e) {
  const termoBusca = e.target.value.toLowerCase();
  const filmes = document.querySelectorAll('.card-title');
  
  filmes.forEach(filme => {
    const titulo = filme.textContent.toLowerCase();
    if (titulo.includes(termoBusca)) {
      filme.closest('.col').style.display = '';
    } else {
      filme.closest('.col').style.display = 'none';
    }
  });
});
