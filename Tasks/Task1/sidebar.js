const hamburger = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");


hamburger.addEventListener('click', () => {
    if(sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        sidebar.classList.add('close');
    } else {
        sidebar.classList.remove('close');
        sidebar.classList.add('open');
    }
});