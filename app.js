const navSlide = () => {
    const arrow = document.getElementById('arrow');
    const options = document.querySelector('.keywords');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-links li');
    arrow.addEventListener('click', () => {
        options.classList.toggle('show');
    });
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

}

navSlide();