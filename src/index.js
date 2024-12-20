// index.js
const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();  // Prevent the form from submitting and refreshing the page
      const input = document.querySelector("input#searchByID");
  
      // Fetch movie data based on the input ID
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => {
          if (!response.ok) {  // Handle invalid ID (404 error)
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then((data) => {
          // Populate movie details on the page
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          
          title.innerText = "Error";
          summary.innerText = error.message;
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  