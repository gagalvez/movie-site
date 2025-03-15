import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import { IoSearchOutline } from "react-icons/io5";

function Home() {
    const[searchMovie, setSearchMovie] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchMovie.trim()) return
        if (loading) return
        setError(null)
        
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchMovie)
            setMovies(searchResults)

        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
        setSearchMovie("")
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
                <button className="search-btn" type="submit"><IoSearchOutline /></button>
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