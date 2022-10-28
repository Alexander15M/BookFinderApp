async function retrieveData() {
  searchInputValue = document.querySelector("input.search-bar")?.value;
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchInputValue}`
  );
  const body = await response.json();
  return body?.items;
}

function deleteBookCards() {
  const bookContainer = document.getElementById("books-container");
  bookContainer.innerHTML = "";
}

function showClearButton() {}

function showLoading() {
  deleteBookCards();
  const bookContainer = document
    .getElementById("loading-spinner")
    .classList.remove("hidden");
}

function hideLoading() {
  document.getElementById("loading-spinner").classList.add("hidden");
}

async function handleSearch() {
  showLoading();
  await createBookCards();
}

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector("button.lookup-button");
  searchButton.addEventListener("click", handleSearch);

  const input = document.querySelector("input.search-bar");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector("button.lookup-button").click();
    }
  });
});
