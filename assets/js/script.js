// Função para controlar a animação do carrossel
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth;

document.querySelector('.prev-btn')?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

document.querySelector('.next-btn')?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

// Loop automático do carrossel
let autoScroll = setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}, 5000);

carousel.addEventListener('mouseover', () => clearInterval(autoScroll));
carousel.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }, 5000);
});

// Contador
function startCountdown(duration) {
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
  
    let remainingTime = duration;
  
    setInterval(() => {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;
  
      hoursEl.textContent = hours.toString().padStart(2, "0");
      minutesEl.textContent = minutes.toString().padStart(2, "0");
      secondsEl.textContent = seconds.toString().padStart(2, "0");
  
      if (remainingTime > 0) {
        remainingTime -= 1;
      } else {
        // Quando o contador zerar, algo pode ser feito aqui
        console.log("Contador zerado");
      }
    }, 1000);
  }
  
  // Inicia o contador com 3 horas (em segundos)
  startCountdown(3 * 60 * 60);
  

  // Alternar o conteúdo do footer
const toggleButton = document.getElementById("toggle-legal");
const legalContent = document.getElementById("legal-content");

toggleButton.addEventListener("click", () => {
  const isVisible = legalContent.style.display === "block";
  legalContent.style.display = isVisible ? "none" : "block";
});
