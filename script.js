const toggle = document.getElementById('navToggle');
const nav = document.getElementById('navbarNav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

function scrollSlider(distance){
    document.getElementById('categories-slider').scrollBy({left:distance,behavior:'smooth'});
}

const container = document.getElementById('destinationSlider');
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
});