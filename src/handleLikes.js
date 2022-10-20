const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tG7RtMwoebPaqmjha3lr/likes/';

const likesArray = [];
const getLikes = async () => {
  const response = await fetch(likesUrl);
  const data = await response.json();

  data.forEach((element) => {
    likesArray.push(element);
  });
};

const updateLikes = async (id, likeCounter) => {
  await getLikes();
  let counter = 0;
  likesArray.forEach((like) => {
    if (like.item_id === id) {
      counter = like.likes;
    }
  });
  likeCounter.innerText = `${counter}`;
};

const sendData = async (id) => {
  await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

document.addEventListener('click', (e) => {
  const likeID = Number(e.target.id);
  if (e.target.classList.contains('fa-heart')) {
    e.target.classList.remove('far');
    e.target.classList.add('fas');
    updateLikes(likeID);
    sendData(likeID);
  }
});

export { getLikes, sendData, updateLikes };