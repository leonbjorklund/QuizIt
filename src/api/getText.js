function getText() {
  // const url = document.getElementById('urlInput').value;
  const url = 'https://sv.wikipedia.org/wiki/Skelett_(olika_betydelser)';
  fetch('/get-text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
}

getText();
