import './style.css';

const num = 400;

const displayPokemon = (pokemon) => {
  const container = document.querySelector('.container');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('pokemon-card');
  const pokeImg = document.createElement('img');
  pokeImg.classList.add('poke-img');
  pokeImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
  const secondDiv = document.createElement('div');
  secondDiv.classList.add('name-likes');
  secondDiv.innerHTML = `<h4 class="poke-name">${pokemon.species.name}</h4> <i class="fa-regular fa-heart"></i>`;
  const likes = document.createElement('p');
  likes.textContent = '7 likes';
  const commentsBtn = document.createElement('button');
  commentsBtn.classList.add('comments');
  commentsBtn.textContent = 'Comments';
  const reservationsBtn = document.createElement('button');
  reservationsBtn.classList.add('reservations');
  reservationsBtn.textContent = 'Reservations';
  mainContainer.append(pokeImg, secondDiv, likes, commentsBtn, reservationsBtn);
  container.appendChild(mainContainer);
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  displayPokemon(pokemon);
};

const fetchPokemon = async () => {
  for (let i = 200; i <= num; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await getPokemon(i);
  }
};

fetchPokemon();