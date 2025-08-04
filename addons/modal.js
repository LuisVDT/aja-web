let currentSubtabs = null;

function toggleSubtabs(category) {
    // Ocultar todas las subtabs
    const allSubtabs = document.querySelectorAll('.subtabs-container');
    allSubtabs.forEach(subtab => {
        subtab.classList.add('hidden');
        const cards = subtab.querySelectorAll('.subtab-card');
        cards.forEach(card => card.classList.remove('show'));
    });

    // Si es la misma categoría, solo ocultar
    if (currentSubtabs === category) {
        currentSubtabs = null;
        return;
    }

    // Mostrar las subtabs de la categoría seleccionada
    const targetSubtabs = document.getElementById(category + '-subtabs');
    if (targetSubtabs) {
        targetSubtabs.classList.remove('hidden');
        currentSubtabs = category;
        
        // Animar las tarjetas de subtabs
        const cards = targetSubtabs.querySelectorAll('.subtab-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100);
        });
    }
}

function openModal(title, content) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalContentDiv = document.querySelector('.modal-content');

    modalTitle.textContent = title;
    modalContent.textContent = content;

    modal.classList.remove('hidden');
    
    // Animar la aparición del modal
    setTimeout(() => {
        modalContentDiv.classList.add('show');
    }, 10);
}

function closeModal(event) {
    // Solo cerrar si se hace clic en el overlay o en el botón de cerrar
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('close-btn')) {
        return;
    }

    const modal = document.getElementById('modal');
    const modalContentDiv = document.querySelector('.modal-content');
    
    modalContentDiv.classList.remove('show');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});