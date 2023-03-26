const darkModeBtn = document.querySelector('#dark-mode-btn');
const body = document.querySelector('body');

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
