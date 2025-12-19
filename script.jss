// Tombol WA tetap interaktif
const waButton = document.querySelector(".contact a");
waButton.addEventListener("click", () => {
  alert("Kamu akan diarahkan ke WhatsApp!");
});

// Fade-in layanan saat scroll
// Slider otomatis
const slider = document.querySelector('.portfolio-slider');
let scrollAmount = 0;
const scrollPerTick = 1; // kecepatan scroll
const sliderWidth = slider.scrollWidth - slider.clientWidth;

function autoScroll() {
  scrollAmount += scrollPerTick;
  if(scrollAmount >= sliderWidth) {
    scrollAmount = 0; // kembali ke awal
  }
  slider.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}

autoScroll();

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
