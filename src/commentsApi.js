const getComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OqoSKrCAwmdPUD6ymYnk/comments?item_id=${id}`);
  const dataFetch = await response.json();
  return dataFetch;
};

const postComments = async (id, name, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OqoSKrCAwmdPUD6ymYnk/comments/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
};

const commentCount = async (id) => {
  const comments = await getComments(id);
  const numComments = comments.length;
  return numComments;
};

export { getComments, postComments, commentCount };