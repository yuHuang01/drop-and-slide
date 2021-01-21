const images = document.getElementsByClassName('movieImg');
const pre = document.getElementById('pre');
const next = document.getElementById('next');
const swapRadio = document.querySelectorAll('.swap-radio');

swapRadio.forEach((radio) => {
  radio.addEventListener('click', (e) => {
    console.log(e.target);
  });
});
