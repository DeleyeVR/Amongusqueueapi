// Prosty skrypt testowy
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    const teraz = new Date();
    const rok = teraz.getFullYear();

    app.innerHTML = `
        <p>JavaScript działa poprawnie!</p>
        <p>Mamy obecnie rok: <strong>${rok}</strong>.</p>
        <button id="btn">Kliknij mnie</button>
    `;

    document.getElementById('btn').addEventListener('click', () => {
        alert('Pozdrowienia z GitHub Pages!');
    });
});
