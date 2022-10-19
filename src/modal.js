import { getComments, postComments, commentCount } from './commentsApi.js';

const displayModal = async (id) => {
  const comments = await getComments(id);
  const count = await commentCount(id);
  // eslint-disable-next-line no-use-before-define
  const pokeData = await renderPokemon(id);
  const modal = document.querySelector('.modal');
  modal.innerHTML = ` <div class="popup">
  <p id="close" class="close-popup">&times;</p>
  <img class="popup-img" src="${pokeData.sprites.other.dream_world.front_default}">
  <h3 class="popup-name">${pokeData.species.name}</h3>
  <div class="attributes">
      <p id="name"><strong>Base Experience</strong>: ${pokeData.base_experience}</p>
      <p id="type"><strong>Type</strong>: ${pokeData.types[0].type.name}</p>
  </div>
  <div class="attributes">
      <p id="weight"><strong>Weight</strong>: ${pokeData.weight}</p>
      <p id="height"><strong>Height</strong>: ${pokeData.height}</p>
  </div>
  <div class="comments-section">
      <h4 class="comments-header">Comments(${count || 0})</h4>
      ${comments.length >= 1
    ? comments.map((comment) => `<p class="comm">${comment.creation_date}  ${comment.username}: ${comment.comment}</p>`).join('')
    : '<p>No available comment</p>'}
  </div>
  <form class="comment-form">
      <h4 class="add-comment">Add a comment</h4>
      <input id="comment-input" class="comment-input" placeholder="Please type your name here" type="text">
      <textarea id="comment-area" placeholder="Enter your message here"></textarea>
      <button class="submit">Comment</button>
  </form>
</div>`;
  const form = document.querySelector('.comment-form');
  const nameInput = document.getElementById('comment-input');
  const commentInput = document.getElementById('comment-area');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const comment = commentInput.value;
    const user = nameInput.value;
    await postComments(id, comment, user);
    commentInput.value = '';
    nameInput.value = '';
    await getComments(id);
    await displayModal(id);
  });

  const closeBtn = document.querySelectorAll('.close-popup');
  closeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  });
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
  secondDiv.innerHTML = `<h4 class="poke-name">${pokemon.species.name}</h4> <i class="fa-regular fa-heart"></i>`;
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

  // const commentBtn = document.querySelectorAll('.comments');
  // commentBtn.forEach((btn, index) => {
  //   const num = index + 1;
  //   btn.addEventListener('click', async () => {
  //     const modal = document.querySelector('.modal');
  //     modal.classList.add('active');
  //     await displayModal(num);
  //   });
  // });
};

const renderPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  displayPokemon(pokemon, id);
  return pokemon;
};

const fetchPokemon = async () => {
  const num = 50;
  for (let i = 1; i <= num; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await getPokemon(i);
  }
};

export { fetchPokemon, displayModal, displayPokemon };
