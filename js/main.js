let movieNameRef = document.querySelector(".movie-name");
let searchBtn = document.querySelector(".search-btn");
let result = document.querySelector(".result");

let getMovie = () => {
    let movieName = movieNameRef.value;
let url = `http://www.omdbapi.com/?i=tt3896198&apikey=d39ebe09`;
if(movieName.length <= 0) {
    result.innerHTML = `<h3 class = "msg">Please Enter A Movie Name</h3>`;
 }
else{
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        console.log(data.Poster);
        console.log(data.Title);
        console.log(data.imdbRating);
        console.log(data.Rated);
        console.log(data.Runtime);
        console.log(data.Genre);
        console.log(data.Plot);
        console.log(data.Actors);

        result.innerHTML = ` 
        <div class = "info"> <img src=${data.Poster} class="poster">
          <div> 
        <h2>${data.Title}</h2>
          <div class = "rating"> 
          <img src ="star-icon.svg">
          <h4>${data.imdbRating}</h4>
          </div>
        </div>

        `

    });
}
};

window.addEventListener("load", getMovie);