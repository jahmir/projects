const movies = new Movie();

const searchButton = document.querySelector('#searchMovie');
const searchField = document.querySelector('#movieField');

searchButton.addEventListener('click', e => {
    const query = searchField.value;

    movies.getMovies(query).then(data => {
        
    })
})