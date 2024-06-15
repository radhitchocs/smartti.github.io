// Show Menu and Remove Menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that varibles exists
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We ADD  THE SHOW MENU CLASS TO THE DIV TAG WITH THE nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// Link Action
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach((link) => {
    link.addEventListener('click', linkAction);
});

// Change Background Color (scrollHeader)
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

// Show Scroll Top Button (scrollTop)
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //when the scroll is higher than 560vh, add the show -scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500, 
    reset: true
  });

  sr.reveal('.home_data, .home_img', { interval: 200 });
  sr.reveal('.about_data, .about_img', { interval: 200 });
  sr.reveal('.services_container, .section-title', { interval: 200 });
  sr.reveal('.portfolio', { interval: 200 });
  sr.reveal('.contact_data, .contact_button', { interval: 200 });
  sr.reveal('.footer_content', { interval: 200 });

