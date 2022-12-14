async function retrieveData () {
    const searchInputValue = document.querySelector("input.search-box")?.value;
    let items = [];
    if (searchInputValue && searchInputValue.length && searchInputValue.length > 0) {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInputValue}`);
      const body = await response.json();
      if (body && body.items && body.items.length > 0) {
        items = body.items;
      }
    return items;
  }
  
 }
 
 function deleteBookCards() {
   const bookContainer = document.getElementById("books-container");
   bookContainer.innerHTML = "";
 }
 

 function showLoading () {
   deleteBookCards();
   document.getElementById("loading-spinner").classList.remove('hidden');
 }
 
 function hideLoading () {
   document.getElementById("loading-spinner").classList.add('hidden')
 }
 
 async function handleSearch() {
  const searchInputValue = document.querySelector("input.search-box")?.value;
  if (searchInputValue && searchInputValue.length && searchInputValue.length > 0) { 
    showLoading();
    await createBookCards()
  }
 }

 document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector("button.lookup-button");
  searchButton.addEventListener("click", handleSearch);

  const input = document.querySelector("input.search-box");

    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("button.lookup-button").click();
      }
    });

});
   
