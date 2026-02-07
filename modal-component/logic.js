const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const modalBar = document.querySelector('.modal-box');

openBtn.addEventListener('click', () => {
  modalBar.style.display = 'flex';
  setTimeout(() => modalBar.classList.add('show'), 10);
});

closeBtn.addEventListener('click', () => {
  modalBar.classList.remove('show');
  setTimeout(() => modalBar.style.display = 'none', 300); 
});
