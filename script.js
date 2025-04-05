const bookmarkInput = document.getElementById('bookmarkInput');
const addBookmarkBtn = document.getElementById('addBookmarkBtn');
const bookmarkList = document.getElementById('bookmarkList');

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

function renderBookmarks() {
  bookmarkList.innerHTML = '';
  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${bookmark}" target="_blank">${bookmark}</a>
      <button class="delete" onclick="deleteBookmark(${index})">видалити</button>`;
    bookmarkList.appendChild(li);
  });
}

function addBookmark() {
  const url = bookmarkInput.value.trim();
  if (url) {
    bookmarks.push(url);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
    bookmarkInput.value = '';
  }
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  renderBookmarks();
}

addBookmarkBtn.addEventListener('click', addBookmark);
renderBookmarks();

const username = document.getElementById('username');
const password = document.getElementById('password');
const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', () => {
  localStorage.setItem('username', username.value);
  localStorage.setItem('password', password.value);
});

window.addEventListener('DOMContentLoaded', () => {
  username.value = localStorage.getItem('username') || '';
  password.value = localStorage.getItem('password') || '';
});
