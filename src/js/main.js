document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
  
    function showItem(index) {
      items.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
      });
    }
  
    function showNextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }
  
    function showPrevItem() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    }
  
    nextButton.addEventListener('click', showNextItem);
    prevButton.addEventListener('click', showPrevItem);
  
    // Auto-slide every 5 seconds
    setInterval(showNextItem, 5000);
  
    // Initialize the carousel
    showItem(currentIndex);
  });