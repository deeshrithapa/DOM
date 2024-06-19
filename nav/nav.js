document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');

    menuToggle.addEventListener('click', () => {
        sidebar.style.display = 'block';
        menuToggle.style.display = 'none'; // Hide menu icon
    });

    sidebarClose.addEventListener('click', () => {
        sidebar.style.display = 'none';
        menuToggle.style.display = 'block'; // Show menu icon
    });
});
