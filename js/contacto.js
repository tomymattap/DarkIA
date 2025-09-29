document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simple validation
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
            formStatus.textContent = 'Por favor, completa todos los campos.';
            formStatus.style.color = '#e53e3e'; // Red for error
            return;
        }

        if (!email.includes('@')) {
            formStatus.textContent = 'Por favor, ingresa un email válido que contenga un @.';
            formStatus.style.color = '#e53e3e'; // Red for error
            return;
        }

        // Simulate form submission
        formStatus.textContent = 'Enviando...';
        formStatus.style.color = 'var(--text-dim)';

        setTimeout(() => {
            formStatus.textContent = '¡Mensaje enviado con éxito!';
            formStatus.style.color = '#48bb78'; // Green for success
            form.reset();
        }, 2000);
    });
});