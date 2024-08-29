// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí puedes agregar lógica para manejar el envío del formulario,
        // como mostrar un mensaje de éxito o enviar los datos a un servidor.
        alert(`Gracias por tu mensaje, ${name}! Te responderé a ${email}.`);
    });
});