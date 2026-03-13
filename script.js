function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-btn');
    
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        btn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Persist theme on reload
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.theme-btn').textContent = '☀️';
    }
}
