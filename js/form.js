// form.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const modalExito = document.getElementById('modal-exito');
    const modalError = document.getElementById('modal-error');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Validación HTML5
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Anti-spam honeypot
        if (form.website.value !== "") {
            return;
        }

        form.querySelector('button[type="submit"]').disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const result = await response.json();

            if (result.success) {
                modalExito.style.display = "flex";
                form.reset();
            } else {
                modalError.style.display = "flex";
            }
        } catch (err) {
            modalError.style.display = "flex";
        } finally {
            form.querySelector('button[type="submit"]').disabled = false;
        }
    });
});

function cerrarModal() {
    document.getElementById('modal-exito').style.display = "none";
    document.getElementById('modal-error').style.display = "none";
}