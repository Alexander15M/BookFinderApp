async function retrieveData () {
    searchInputValue = document.querySelector("input.search-bar")?.value;
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
 
 function showClearButton() {
 } 
 
 function showLoading () {
   deleteBookCards();
   const bookContainer = 
   document.getElementById("loading-spinner").classList.remove('hidden');
 }
 
 function hideLoading () {
   document.getElementById("loading-spinner").classList.add('hidden')
 }
 
 async function handleSearch() {
   showLoading();
   await createBookCards()
 }
 document.addEventListener("DOMContentLoaded", function(){
   searchButton = document.querySelector("button.lookup-button");
 
   searchButton.addEventListener("click", handleSearch);
 })
   