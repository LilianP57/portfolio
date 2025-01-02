// Menu burger

const menuHamburger = document.querySelector(".burger_menu")
const navLinks = document.querySelector(".nav-liens")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })

// Compétences - Barre de progression 

document.addEventListener("DOMContentLoaded", function () {
        const progressBars = document.querySelectorAll(".comp-percent");
    
        progressBars.forEach(bar => {
            const percent = bar.getAttribute("data-percent");
            bar.style.width = percent;
        });
    });