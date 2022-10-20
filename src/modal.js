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
  const pokeImg = document.createElement('img');
  pokeImg.classList.add('poke-img');
  pokeImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
  const secondDiv = document.createElement('div');
  secondDiv.classList.add('name-likes');
  secondDiv.innerHTML = `<h4 class="poke-name">${capitalize(pokemon.species.name)}</h4> <i class="fa-regular fa-heart"></i>`;
  const likes = document.createElement('p');
  likes.textContent = '7 likes';
  const commentsBtn = document.createElement('button');
  commentsBtn.classList.add('comments');
  commentsBtn.setAttribute('id', id);
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
