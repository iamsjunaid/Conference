const barMenu = document.querySelector('.bar-menu');
const popup = document.querySelector('.pop-up');
const close = document.querySelector('.close');

barMenu.addEventListener('click', () => {
  popup.classList.toggle('toggler');
});

close.addEventListener('click', () => {
  popup.classList.remove('toggler');
});
