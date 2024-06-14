document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navItems = document.getElementById('navItems');
    
    menuToggle.addEventListener('click', () => {
        navItems.classList.toggle('show');
    });
});
