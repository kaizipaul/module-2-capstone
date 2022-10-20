import './style.css';
import './assets/images/pokeball.png';
import './assets/images/pokeball.jpeg';
import { fetchPokemon } from './modal.js';
import displayModal from './displayModal.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchPokemon();
});

document.addEventListener('click', (e) => {
  const num = Number(e.target.id);
  if (e.target.classList.contains('comments')) {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
    displayModal(num);
  }
});
