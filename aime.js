// //const API_KEY = "YOUR_API_KEY";
// const API_KEY = "abcd1234";

// const movieGrid =
// document.getElementById("movieGrid");

// // Search Movies

// async function searchMovies(){

//   const searchInput =
//   document.getElementById("searchInput");

//   const search =
//   searchInput.value.trim();

//   if(search === ""){

//     movieGrid.innerHTML = `
//       <h2 class="message">
//         Please enter a movie name 🎬
//       </h2>
//     `;

//     return;
//   }

//   movieGrid.innerHTML = `
//     <h2 class="message">
//       Loading Movies 🍿...
//     </h2>
//   `;

//   try{

//     const response =
//     await fetch(
//       `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
//     );

//     const data =
//     await response.json();

//     movieGrid.innerHTML = "";

//     // No Movies Found

//     if(data.Response === "False"){

//       movieGrid.innerHTML = `
//         <h2 class="message">
//           No Movies Found 😢
//         </h2>
//       `;

//       return;
//     }

//     // Show Movies

//     data.Search.forEach(movie => {

//       const poster =

//       movie.Poster !== "N/A"

//       ? movie.Poster

//       : "https://via.placeholder.com/300x400?text=No+Image";

//       const movieCard = `
      
//         <div class="movie-card">

//           <img
//             src="${poster}"
//             alt="${movie.Title}"
//           >

//           <div class="movie-info">

//             <h3>
//               ${movie.Title}
//             </h3>

//             <p>
//               📅 ${movie.Year}
//             </p>

//             <p>
//               🎥 ${movie.Type}
//             </p>

//             <button
//               onclick="getMovieDetails('${movie.imdbID}')"
//             >
//               View Details
//             </button>

//           </div>

//         </div>
      
//       `;

//       movieGrid.innerHTML += movieCard;

//     });

//   }

//   catch(error){

//     movieGrid.innerHTML = `
//       <h2 class="message">
//         Something went wrong 🚨
//       </h2>
//     `;

//   }

// }

// // Movie Details Popup

// async function getMovieDetails(id){

//   try{

//     const response =
//     await fetch(
//       `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
//     );

//     const movie =
//     await response.json();

//     const popup = document.createElement("div");

//     popup.classList.add("popup");

//     popup.innerHTML = `
    
//       <div class="popup-content">

//         <span
//           class="close-btn"
//           onclick="closePopup()"
//         >
//           ✖
//         </span>

//         <img
//           src="${movie.Poster}"
//         >

//         <h2>
//           ${movie.Title}
//         </h2>

//         <p>
//           ⭐ IMDb: ${movie.imdbRating}
//         </p>

//         <p>
//           📅 Year: ${movie.Year}
//         </p>

//         <p>
//           🎭 Genre: ${movie.Genre}
//         </p>

//         <p>
//           🎬 Director: ${movie.Director}
//         </p>

//         <p>
//           📝 ${movie.Plot}
//         </p>

//       </div>
    
//     `;

//     document.body.appendChild(popup);

//   }

//   catch(error){

//     alert("Failed to load movie details");

//   }

// }

// // Close Popup

// function closePopup(){

//   const popup =
//   document.querySelector(".popup");

//   popup.remove();

// }

// // Enter Key Search

// document
// .getElementById("searchInput")
// .addEventListener(
//   "keypress",
//   function(e){

//     if(e.key === "Enter"){

//       searchMovies();

//     }

//   }
// );










// const movieGrid =
// document.getElementById("movieGrid");

// // Search Function

// async function searchMovies(){

//   const search =
//   document
//   .getElementById("searchInput")
//   .value
//   .trim();

//   if(search === "") return;

//   movieGrid.innerHTML = `
  
//     <h2 class="message">
//       Loading... 🍿
//     </h2>
  
//   `;

//   try{

//     const response =
//     await fetch(
//       `https://api.tvmaze.com/search/shows?q=${search}`
//     );

//     const data =
//     await response.json();

//     movieGrid.innerHTML = "";

//     // No Results

//     if(data.length === 0){

//       movieGrid.innerHTML = `
      
//         <h2 class="message">
//           No Movies Found 😢
//         </h2>
      
//       `;

//       return;
//     }

//     // Show Cards

//     data.forEach(item => {

//       const movie =
//       item.show;

//       const image =

//       movie.image
//       ?

//       movie.image.medium

//       :

//       "https://via.placeholder.com/300x400?text=No+Image";

//       movieGrid.innerHTML += `
      
//         <div class="movie-card">

//           <img
//             src="${image}"
//             alt="${movie.name}"
//           >

//           <div class="movie-info">

//             <h3>
//               ${movie.name}
//             </h3>

//             <p>
//               ⭐ Rating:
//               ${
//                 movie.rating.average
//                 || "N/A"
//               }
//             </p>

//             <p>
//               🎭
//               ${
//                 movie.genres.join(", ")
//                 || "No Genre"
//               }
//             </p>

//             <button
//               onclick="openMovie('${movie.url}')"
//             >
//               View Show
//             </button>

//           </div>

//         </div>
      
//       `;

//     });

//   }

//   catch(error){

//     movieGrid.innerHTML = `
    
//       <h2 class="message">
//         Something went wrong 🚨
//       </h2>
    
//     `;

//     console.log(error);

//   }

// }

// // Open Show Page

// function openMovie(url){

//   window.open(
//     url,
//     "_blank"
//   );

// }

// // Enter Key Support

// document
// .getElementById("searchInput")
// .addEventListener(
//   "keypress",
//   function(e){

//     if(e.key === "Enter"){

//       searchMovies();

//     }

//   }
// );











const movieGrid =
document.getElementById("movieGrid");

const searchInput =
document.getElementById("searchInput");

const popup =
document.getElementById("popup");

const popupData =
document.getElementById("popupData");

const closeBtn =
document.getElementById("closeBtn");

const themeBtn =
document.getElementById("themeBtn");

let favorites =
JSON.parse(
  localStorage.getItem("favorites")
) || [];

// Trending Shows

async function loadTrending(){

  const response =
  await fetch(
    "https://api.tvmaze.com/shows"
  );

  const data =
  await response.json();

  displayMovies(
    data.slice(0,20)
  );

}

loadTrending();

// Live Search

searchInput.addEventListener(
  "input",
  async function(){

    const search =
    searchInput.value.trim();

    if(search === ""){

      loadTrending();

      return;
    }

    const response =
    await fetch(
      `https://api.tvmaze.com/search/shows?q=${search}`
    );

    const data =
    await response.json();

    const movies =
    data.map(item => item.show);

    displayMovies(movies);

  }
);

// Display Movies

function displayMovies(movies){

  movieGrid.innerHTML = "";

  movies.forEach(movie => {

    const image =

    movie.image
    ?

    movie.image.medium

    :

    "https://via.placeholder.com/300x400";

    const rating =
    movie.rating.average || 0;

    let ratingClass = "bad";

    if(rating >= 8){
      ratingClass = "good";
    }
    else if(rating >= 5){
      ratingClass = "average";
    }

    movieGrid.innerHTML += `
    
      <div class="movie-card">

        <img src="${image}">

        <div class="movie-info">

          <h3>
            ${movie.name}
          </h3>

          <p class="${ratingClass}">
            ⭐ Rating: ${rating}
          </p>

          <p>
            🎭
            ${
              movie.genres.join(", ")
              || "No Genre"
            }
          </p>

          <button
            onclick="openPopup(${movie.id})"
          >
            View Details
          </button>

          <button
            class="favorite-btn"
            onclick="addFavorite('${movie.name}')"
          >
            ❤️ Favorite
          </button>

        </div>

      </div>
    
    `;

  });

}

// Popup Details

async function openPopup(id){

  const response =
  await fetch(
    `https://api.tvmaze.com/shows/${id}`
  );

  const movie =
  await response.json();

  popup.style.display =
  "flex";

  popupData.innerHTML = `
  
    <img
      src="${movie.image.original}"
    >

    <h2>
      ${movie.name}
    </h2>

    <p>
      ⭐ ${movie.rating.average}
    </p>

    <p>
      🎭 ${movie.genres.join(", ")}
    </p>

    <p>
      📅 ${movie.premiered}
    </p>

    <p>
      ${movie.summary}
    </p>
  
  `;

}

// Close Popup

closeBtn.addEventListener(
  "click",
  function(){

    popup.style.display =
    "none";

  }
);

// Favorites

function addFavorite(name){

  favorites.push(name);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  alert("Added to Favorites ❤️");

}

// Theme Switcher

themeBtn.addEventListener(
  "click",
  function(){

    document.body.classList.toggle(
      "light"
    );

  }
);