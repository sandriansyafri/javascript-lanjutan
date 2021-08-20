const btnSearch = document.querySelector("button.btn-search");

const showCard = function (movie) {
  return `<div class="col-lg-4">
                <div class="card my-2">
                    <div class="img-wrapper">
                        <img src="${movie.Poster}" alt=" " class="mb-3" />
                    </div>
                <div class="card-body">
                    <div class="card-title">
                    <h5>${movie.Title}</h5>
                    </div>
                    <div class="card-subtitle">
                    <p>${movie.Year}</p>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    type="button"
                    data-imdbid=${movie.imdbID}
                    class="btn btn-primary btn-md btn-detail"
                    >
                    Detail
                    </button>
                </div>
                </div>
            </div>`;
};

const showDetailCard = function (movie) {
  return `<div class="container-fluid">
                <div class="row">
                    <div class="col-4 border">
                    <img src="${movie.Poster}" class="img-fluid" alt="" />
                    </div>
                    <div class="col">
                    <ul class="list-group">
                        <li class="list-group-item"> <b>Title :</b> <span>${movie.Title}</span></li>
                        <li class="list-group-item"> <b>Year :</b> <span>${movie.Year}</span></li>
                        <li class="list-group-item"> <b>Rate :</b> <span>${movie.Rated}</span></li>
                        <li class="list-group-item"> <b>Plot :</b> <div>${movie.Plot}</div></li>
                    </ul>
                    </div>
                </div>
                </div>`;
};

const getMovies = function (keywords) {
  return fetch(`http://www.omdbapi.com/?apikey=2b9a984b&s=${keywords}`)
    .then((res) => res.json())
    .then((res) => res.Search);
};

const getDetailMovies = function (id) {
  return fetch(`http://www.omdbapi.com/?apikey=2b9a984b&i=${id}`)
    .then((res) => res.json())
    .then((res) => res);
};

const updateUI = function (movies) {
  let card = "";
  const movieContainer = document.querySelector(".movie-container");
  movies.map((movie) => (card += showCard(movie)));
  movieContainer.innerHTML = card;
};

const updateDetailUI = function (movie) {
  const modalBody = document.querySelector(".modal-body");
  const movieDetail = showDetailCard(movie);
  modalBody.innerHTML = movieDetail;
};

btnSearch.addEventListener("click", async function (e) {
  e.preventDefault();
  const keywords = document.querySelector("input[name=keywords]").value;
  const movies = await getMovies(keywords);
  updateUI(movies);
});

document.addEventListener("click", async function (e) {
  const target = e.target;
  if (target.classList.contains("btn-detail")) {
    const id = target.dataset.imdbid;
    const movie = await getDetailMovies(id);
    updateDetailUI(movie);
  }
});
