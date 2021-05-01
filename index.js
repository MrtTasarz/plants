const openBtn = document.querySelector('.open-btn');
const closeBtn = document.getElementById('menu-close');
const closeBasket = document.getElementById('basket-close');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const basketBtn = document.querySelector('.basket-btn')
const basket = document.querySelector('.basket')

function open(el, btn) {
  body.classList.add('open-menu');
  el.style.display = 'block';
  el.classList.remove('close')
  btn.style.display = "block"
}

function close(e, el) {
  body.classList.remove('open-menu');
  el.classList.add('close')
  setTimeout(() => {
    el.style.display = 'none';
    e.target.style.display = 'none';
  }, 1000)
}

openBtn.addEventListener('click', () => { open(menu, closeBtn) })

closeBtn.addEventListener('click', (e) => { close(e, menu) })

basketBtn.addEventListener('click', () => { open(basket, closeBasket) })

closeBasket.addEventListener('click', (e) => { close(e, basket) })



