class Movie {
    constructor(){
        this.api_key = 'e02fbdcb3e810a18bbd18882b3b26d0d';
    }

    async getMovies(query){
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}`;

        let data = [];

        const getAllMovies = async (page=1) => {
            const results = await fetch(`${apiUrl}$page=${page}`);
            results = await results.json();

            results.results.forEach(movie => {
                data.push(movie);
            });
        }
        
        

        console.log(data);
    }
}