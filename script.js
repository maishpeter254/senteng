document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("bg-video");
  video.playbackRate = 0.5; // 0.5 = half speed, 1 = normal, 2 = double speed
});
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    dots[i].classList.remove('active');
  });
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

// Auto slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 5000);
