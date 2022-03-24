let menuaberto = false;
const button = document.querySelector('nav img');
const menu = document.querySelector('nav ul.menu');

button.addEventListener("click", () => {
    if (!menuaberto) {
        menu.style.display = 'flex';
        menuaberto = true;
    } else {
        menu.style.display = 'none';
        menuaberto = false;
    }
})