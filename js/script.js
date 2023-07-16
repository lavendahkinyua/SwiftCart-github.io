const header = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled__header');
    } else {
        header.classList.remove('scrolled__header');
    }
}

const hamburger = document.getElementById('top__navbar__hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close');
});
