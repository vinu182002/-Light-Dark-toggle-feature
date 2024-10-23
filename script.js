const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Add or remove 'dark-mode' class

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme'); // Get the saved theme
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode'); // Apply dark mode if it was saved
    }
});
