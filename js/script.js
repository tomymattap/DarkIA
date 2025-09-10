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

// Manejo básico de envío del formulario de contacto
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const nombre = String(formData.get('nombre') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const asunto = String(formData.get('asunto') || '').trim();
    const mensaje = String(formData.get('mensaje') || '').trim();

    if (!nombre || !email || !asunto || !mensaje) {
        if (formStatus) formStatus.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    // Simulación de envío
    if (formStatus) formStatus.textContent = 'Enviando...';
    setTimeout(() => {
        if (formStatus) formStatus.textContent = '¡Mensaje enviado! Gracias por contactarte.';
        contactForm.reset();
    }, 800);
});

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


