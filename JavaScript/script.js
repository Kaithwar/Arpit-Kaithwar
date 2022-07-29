// Navigation bar effect on scroll 
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Theme Changer 
const themebtn = document.querySelector(".theme-btn");
themebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themebtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
})

const getCurrentTheme = () => document.body.classList.contains("dak-theme") ? "dark" : "light";
const getCurrentIcon = () => themebtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");


if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themebtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


// Scroll Button 
const Scrollbtn = document.querySelector(".scroll")

window.addEventListener("scroll", function(){
    Scrollbtn.classList.toggle("active", window.scrollY > 500);
})

Scrollbtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll",() => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    })
})


// Responsive navigation menu toggle

const menubtn = document.querySelector(".nav-menu-btn")
const closebtn = document.querySelector(".nav-close-btn")
const navigation = document.querySelector(".navigation")
const navItem = document.querySelectorAll(".nav-items a")

menubtn.addEventListener("click", () => {
    navigation.classList.add("active");
})

closebtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})

navItem.forEach((navItem) =>{
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
})

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.skills-description, .contact-left h2', { delay: 700, origin: 'left'});
ScrollReveal().reveal('.por-card, .education, .work .img-card', { delay: 800, origin: 'bottom', interval:200 });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval:200 });