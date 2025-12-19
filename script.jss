// Tombol WA tetap interaktif
const waButton = document.querySelector(".contact a");
waButton.addEventListener("click", () => {
  alert("Kamu akan diarahkan ke WhatsApp!");
});

// Fade-in layanan saat scroll
const services = document.querySelectorAll('.service-item');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  services.forEach(service => {
    const serviceTop = service.getBoundingClientRect().top;
    if(serviceTop < triggerBottom) {
      service.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
