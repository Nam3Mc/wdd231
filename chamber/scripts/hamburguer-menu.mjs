export default function hamburguerMenu() {
    const menuBtn = document.querySelector('.hamburger');
    const navBar = document.querySelector('.navigation');

    menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('show')
    navBar.classList.toggle('show')
})
}