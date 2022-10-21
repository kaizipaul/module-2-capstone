import './style.css';
import './assets/images/pokeball.png';
import './assets/images/pokeball.jpeg';
import { fetchPokemon } from './modal.js';
import displayModal from './displayModal.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchPokemon();
});

const disableScroll = () => {
  const horizontalPos = window.scrollX;
  const verticalPos = window.scrollY;
  window.onscroll = () => {
    window.scroll(horizontalPos, verticalPos);
  };
};

document.addEventListener('click', (e) => {
  const num = Number(e.target.id);
  if (e.target.classList.contains('comments')) {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
    displayModal(num);
    disableScroll();
  }
});
