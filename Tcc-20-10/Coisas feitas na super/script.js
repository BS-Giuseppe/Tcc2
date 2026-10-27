document.querySelectorAll('.btn-filtro').forEach(botao => {
  botao.addEventListener('click', () => {
    // Pega o tipo de imóvel que queremos filtrar (todos, casa, apartamento)
    const categoria = botao.getAttribute('data-filter');
    
    // Seleciona todos os cards de imóveis
    const imoveis = document.querySelectorAll('.item-imovel');
    
    imoveis.forEach(imovel => {
      // Se clicou em 'todos', mostra tudo tirando o 'd-none'
      if (categoria === 'todos') {
        imovel.classList.remove('d-none');
      } else {
        // Se o imóvel tiver a classe correspondente (ex: 'casa'), ele aparece
        if (imovel.classList.contains(categoria)) {
          imovel.classList.remove('d-none');
        } else {
          // Se não for da categoria, o Bootstrap esconde com 'd-none'
          imovel.classList.add('d-none');
        }
      }
    });

    // Opcional: Mudar o estilo do botão ativo para destacar
    document.querySelectorAll('.btn-filtro').forEach(b => {
      b.classList.replace('btn-primary', 'btn-outline-primary');
    });
    botao.classList.replace('btn-outline-primary', 'btn-primary');
  });
});