const botoes = document.querySelectorAll('.btn-filtro');
const itens = document.querySelectorAll('.item-produto');


function aplicarFiltro(categoria) {
    if (!categoria) return;

    itens.forEach(item => {
        
        if (categoria === 'todos' || item.dataset.categoria === categoria) {
            item.classList.remove('d-none'); 
        } else {
            item.classList.add('d-none');    
        }
    });
}


botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const filtroSelecionado = botao.dataset.filter;
        localStorage.setItem('filtroAtivo', filtroSelecionado);
        aplicarFiltro(filtroSelecionado);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const filtroSalvo = localStorage.getItem('filtroAtivo');
    if (filtroSalvo) {
        aplicarFiltro(filtroSalvo);
    }
});

function a(){
    window.location.href = "index.html";
}