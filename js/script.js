// Toggle del menú móvil
const navToggleButton = document.getElementById('navToggle');
const primaryMenu = document.getElementById('primaryMenu');

function toggleMenu() {
    const willOpen = primaryMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(willOpen));
    navToggleButton.setAttribute('aria-label', willOpen ? 'Cerrar menú' : 'Abrir menú');
}

navToggleButton?.addEventListener('click', toggleMenu);

// Cerrar menú al navegar (en móvil)
primaryMenu?.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof Element && target.tagName.toLowerCase() === 'a') {
        primaryMenu.classList.remove('open');
        navToggleButton?.setAttribute('aria-expanded', 'false');
        navToggleButton?.setAttribute('aria-label', 'Abrir menú');
    }
});

// Año dinámico en el footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
}



// Ver más/menos para la sinopsis en móviles
const synopsisBody = document.getElementById('synopsisBody');
const synopsisToggle = document.getElementById('synopsisToggle');
synopsisToggle?.addEventListener('click', () => {
    const isExpanded = synopsisBody?.classList.toggle('expanded');
    synopsisToggle.setAttribute('aria-expanded', String(!!isExpanded));
    synopsisToggle.textContent = isExpanded ? 'Ver menos' : 'Ver más';
});

// Acordeón de episodios en móvil
document.querySelectorAll('.season-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
        const controlsId = btn.getAttribute('aria-controls');
        if (!controlsId) return;
        const list = document.getElementById(controlsId);
        if (!list) return;
        const willOpen = !list.classList.contains('open');
        list.classList.toggle('open', willOpen);
        btn.setAttribute('aria-expanded', String(willOpen));
        btn.textContent = willOpen ? 'Ocultar episodios' : 'Ver episodios';
    });
});


