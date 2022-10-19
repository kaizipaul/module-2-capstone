import './style.css';
import { fetchPokemon, displayModal } from './modal.js';

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
