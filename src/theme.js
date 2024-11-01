// Select the toggle button
const themeToggleButton = document.getElementById('themeToggle');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
}

// Toggle dark mode on button click
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Save preference
});
