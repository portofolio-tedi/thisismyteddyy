// ALERT DEBUG
console.log("script.js loaded!");

// Fade-in Services
const services = document.querySelectorAll('.service-item');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  services.forEach(service => {
    const serviceTop = service.getBoundingClientRect().top;
    if(serviceTop < triggerBottom){ service.classList.add('show'); }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Portfolio Slider Otomatis
const slider = document.querySelector('.portfolio-slider');
let scrollAmount = 0;
const scrollPerTick = 1;
function autoScroll(){
  scrollAmount += scrollPerTick;
  if(scrollAmount >= slider.scrollWidth - slider.clientWidth){ scrollAmount = 0; }
  slider.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}
autoScroll();
