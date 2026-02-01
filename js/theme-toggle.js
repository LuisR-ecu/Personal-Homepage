// Function to apply theme based on local storage OR system settings
function applyTheme() {
    const storedTheme = localStorage.getItem('color-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// 1. Run immediately on load
applyTheme();

// 2. Listen for System changes (Windows/macOS theme flip)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-flip if the user hasn't set a manual preference
    if (!localStorage.getItem('color-theme')) {
        applyTheme();
    }
});

// 3. Handle the Manual Button Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            // Save preference
            localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        });
    }
});