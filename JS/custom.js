AOS.init({
    disable: function() {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    }
  });
  
// Menu burger

const menuHamburger = document.querySelector(".burger_menu")
const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })

const navMenu = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

for(var i = 0; i < navItems.length; i++){
    navItems[i].addEventListener("click", function(){
        var current = document.querySelector(".active")

        if(current){
          current.classList.remove('active')
        }
        this.classList.add('active')
    })
}

// Compétences - Barre de progression 

document.addEventListener("DOMContentLoaded", function () {
        const progressBars = document.querySelectorAll(".comp-percent");
    
        progressBars.forEach(bar => {
            const percent = bar.getAttribute("data-percent");
            bar.style.width = percent;
        });
    });