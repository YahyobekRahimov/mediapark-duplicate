function initializeCarousel(carouselSelector) {
    const carousel = document.querySelector(carouselSelector);
    const prevButton = carousel.querySelector('.prev-button');
    const nextButton = carousel.querySelector('.next-button');
    const slides = carousel.querySelectorAll('img');
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    // Display the initial slide
    showSlide(currentIndex);
  }
  
  // Initialize each carousel on your page
  initializeCarousel('.carousel1');
  initializeCarousel('.carousel2');
  // Add more carousels as needed
  