const newFormHandler = async (event) => {
  event.preventDefault();

  const parent_id = event.target.dataset.parent;
  const comment = document.querySelector('#project-desc').value.trim();

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment, parent_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/comment/${parent_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  // .addEventListener('click', delButtonHandler);
