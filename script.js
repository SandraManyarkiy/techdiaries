// Add a glitch effect to the header text
const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', () => {
  logo.style.textShadow = '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff';
});

logo.addEventListener('mouseout', () => {
  logo.style.textShadow = 'none';
});