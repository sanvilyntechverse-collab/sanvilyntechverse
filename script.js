const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
    localStorage.setItem('theme', newTheme);
});

if(localStorage.getItem('theme') === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}