function selecionar(categoria) {
  document.querySelectorAll('.item-imovel').forEach(imovel => {
    const deveMostrar = categoria === 'todos' || imovel.classList.contains(categoria);
    imovel.classList.toggle('d-none', !deveMostrar);
  });

  document.querySelectorAll('.btn-filtro').forEach(botao => {
    const ativo = botao.dataset.filter === categoria;
    botao.classList.toggle('btn-primary', ativo);
    botao.classList.toggle('btn-outline-primary', !ativo);
  });
}

function Alugar(botao) {
  sessionStorage.setItem('filtroImovel', botao.dataset.filter);
  window.location.href = "Alugar.html";
}

function Vender(botao) {
  sessionStorage.setItem('filtroImovel', botao.dataset.filter);
  window.location.href = "Vendas.html";
}

document.querySelectorAll('.btn-filtro').forEach(botao => {
  botao.addEventListener('click', () => selecionar(botao.dataset.filter));
});

const trilhoImoveis = document.querySelector('#trilho-imoveis');
if (trilhoImoveis) {
  document.querySelectorAll('[data-carrossel-direcao]').forEach(botao => {
    botao.addEventListener('click', () => {
      const card = trilhoImoveis.querySelector('.imovel-card');
      if (!card) return;

      const gap = parseFloat(getComputedStyle(trilhoImoveis).columnGap) || 0;
      const distancia = card.getBoundingClientRect().width + gap;
      const comportamento = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

      trilhoImoveis.scrollBy({
        left: Number(botao.dataset.carrosselDirecao) * distancia,
        behavior: comportamento
      });
    });
  });
}

const filtroSalvo = sessionStorage.getItem('filtroImovel');
if (filtroSalvo) {
  sessionStorage.removeItem('filtroImovel');
  selecionar(filtroSalvo);
}

