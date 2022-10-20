import './style.css';
import './assets/images/pokeball.png';

import { updateLikes } from './handleLikes.js';

const num = 50;

const displayPokemon = (pokemon, id) => {
  const container = document.querySelector('.container');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('pokemon-card');
  const pokeImg = document.createElement('img');
  pokeImg.classList.add('poke-img');
  pokeImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
  const secondDiv = document.createElement('div');
  secondDiv.classList.add('name-likes');
  secondDiv.innerHTML = `<h4 class="poke-name">${pokemon.species.name}</h4>`;
  const likes = document.createElement('p');
  likes.innerHTML = `<i id=${id} class="far fa-heart"></i>`;
  const likeCount = document.createElement('span');
  likeCount.innerHTML = `<span id=counter${id} class="likes-count">0</span>`;
  const commentsBtn = document.createElement('button');
  commentsBtn.classList.add('comments');
  commentsBtn.innerHTML = '<i class="far fa-comment"></i>';
  likes.appendChild(likeCount);
  mainContainer.append(pokeImg, secondDiv, likes, commentsBtn);
  container.appendChild(mainContainer);
  const likeCounter = document.getElementById(`counter${id}`);
  const numLikes = likeCounter.innerText;
  const numLikesInt = numLikes.match(/\d+/)[0];
  likeCounter.innerText = `${Number(numLikesInt) + 1}`;
  updateLikes(id, likeCounter);

  const counter = document.querySelector('.pokemon-section');
  counter.innerText = `Pokemon(${id})`;
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  displayPokemon(pokemon, id);
};

const fetchPokemon = async () => {
  for (let i = 1; i <= num; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await getPokemon(i);
  }
};

document.addEventListener('DOMContentLoaded', fetchPokemon());

export default { displayPokemon };
