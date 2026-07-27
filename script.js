document.addEventListener('DOMContentLoaded', () => {
    // Rola a tela suavemente ao clicar no botão de presença do topo
    const navBtn = document.querySelector('.btn-presenca-nav');
    
    if (navBtn) {
        navBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#lista-presenca');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});