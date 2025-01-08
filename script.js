document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const post = params.get('post');
  const contentDiv = document.getElementById('content');

  if (post) {
    fetch(`posts/${post}.md`)
      .then(response => response.text())
      .then(markdown => {
        contentDiv.innerHTML = marked.parse(markdown);
      })
      .catch(error => {
        contentDiv.innerHTML = '<p>Error loading post.</p>';
      });
  } else {
    contentDiv.innerHTML = '<p>Select a recipe to view!</p>';
  }
});
