import { getComments, commentCount, postComments } from './commentsApi.js';
import { capitalize, renderPokemon } from './modal.js';

const displayModal = async (id) => {
  const comments = await getComments(id);
  const count = await commentCount(id);
  const pokeData = await renderPokemon(id);
  const modal = document.querySelector('.modal');
  modal.innerHTML = ` <div class="popup">
    <p id="close" class="close-popup">&times;</p>
    <div class="moves">
    <h4>Special Moves</h4>
    <li><i class="fa-solid fa-circle first"></i>${capitalize(pokeData.moves[0].move.name)}</li>
    <li><i class="fa-solid fa-circle second"></i>${capitalize(pokeData.moves[1].move.name)}</li>
    <li><i class="fa-solid fa-circle third"></i>${capitalize(pokeData.moves[2].move.name)}</li>
    <li><i class="fa-solid fa-circle fourth"></i>${capitalize(pokeData.moves[3].move.name)}</li>
    </div>
    <img class="popup-img" src="${pokeData.sprites.other.dream_world.front_default}">
    <h3 class="popup-name">${capitalize(pokeData.species.name)}</h3>
    <div class="line-rule"></div>
    <div class="attributes">
        <p id="name"><strong>Base Experience</strong>: ${pokeData.base_experience}</p>
        <p id="type"><strong>Type</strong>: ${capitalize(pokeData.types[0].type.name)}</p>
    </div>
    <div class="attributes">
        <p id="weight"><strong>Weight</strong>: ${pokeData.weight} lbs</p>
        <p id="height"><strong>Height</strong>: ${pokeData.height}</p>
    </div>
    <div class="line-rule"></div>
    <h4 class="comments-header">Comments(${count || 0})</h4>
    <div class="comments-section">
        ${comments.length >= 1
    ? comments.map((comment) => `<p class="comm">${comment.creation_date}-  ${comment.username}: ${comment.comment}</p>`).join('')
    : '<p>"No available comment"</p>'}
    </div>
    <form class="comment-form">
        <h4 class="add-comment">Add a comment<i class="fa-solid fa-comment"></i></h4>
        <input id="comment-input" class="comment-input" placeholder="Please type your name here" type="text" required>
        <textarea id="comment-area" placeholder="Enter your message here" required></textarea>
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

export default displayModal;