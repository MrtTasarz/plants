const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

openBtn.addEventListener('click', (e) => {
  body.classList.add('open-menu');
  e.target.style.display = 'none';
  menu.style.display = 'block';
  menu.classList.remove('close')
  closeBtn.style.display = "block";

});

closeBtn.addEventListener('click', (e) => {
  body.classList.remove('open-menu');
  menu.classList.add('close')
  setTimeout(() => {
    menu.style.display = 'none';
    e.target.style.display = 'none';
    openBtn.style.display = "block";
  }, 1000)

});


