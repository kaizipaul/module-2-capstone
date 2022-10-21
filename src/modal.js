import { updateLikes } from './handleLikes.js';

const capitalize = (str) => {
  const cap = str.charAt(0).toUpperCase() + str.slice(1);
  return cap;
};

const renderPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
};

const displayPokemon = (pokemon, id) => {
  const container = document.querySelector('.container');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('pokemon-card');
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo-container');
  const pokeImg = document.createElement('img');
  pokeImg.classList.add('poke-img');
  pokeImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container');
  const nameLike = document.createElement('div');
  nameLike.classList.add('name-like');
  const secondDiv = document.createElement('div');
  secondDiv.classList.add('name-likes');
  secondDiv.innerHTML = `<h4 class="poke-name">${pokemon.species.name}</h4>`;
  const likes = document.createElement('p');
  likes.innerHTML = `<i id=${id} class="far fa-heart"></i><span id=counter${id} class="likes-count">0</span>`;
  const commentsBtn = document.createElement('button');
  commentsBtn.setAttribute('id', id);
  commentsBtn.classList.add('comments');
  commentsBtn.textContent = 'Details';
  photoContainer.appendChild(pokeImg);
  nameLike.append(secondDiv, likes);
  detailsContainer.append(nameLike, commentsBtn);
  mainContainer.append(photoContainer, detailsContainer);
  container.appendChild(mainContainer);

  const likeCounter = document.getElementById(`counter${id}`);
  updateLikes(id, likeCounter);
  const counter = document.querySelector('.counter');
  const itemCounter = Number(id) - 300;
  counter.innerText = `${itemCounter}`;
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  displayPokemon(pokemon, id);
  return pokemon;
};

const fetchPokemon = async () => {
  const num = 355;
  for (let i = 300; i <= num; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await getPokemon(i);
  }
};

export {
  fetchPokemon, capitalize, displayPokemon, renderPokemon,
};
