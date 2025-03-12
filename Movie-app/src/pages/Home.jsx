import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const[searchMovie, setSearchMovie] = useState('');

    const movies = [
        {id: 1, title: 'Terminator', releaseDate: '1996'},
        {id: 2, title: 'Aceventura', releaseDate: '2000'},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchMovie)
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-nav">
                <input type="text"
                placeholder="Busca aqui"
                className="search-bar"
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)}
                />
                <button className="search-btn" type="submit">Buscar</button>
            </form>

            <div className="movies=grid">
                {movies.map((movie) =>
                    movie.title.toLowerCase().startsWith(searchMovie) && (
                <MovieCard movie={movie} key={movie.id} />
                )
            )}
            </div>
        </div>
    )
}

export default Home