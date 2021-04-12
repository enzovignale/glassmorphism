function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const toggleSection = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    toggleSection.classList.toggle('active');
}