import "../css/MovieCard.css"

function MovieCard({ movie }) {
    return (
      <div className='movie-card'>
            <div className="movie-img">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button>
                        <p>♡</p>
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <h1>{movie.release_date?.split("-")[0]}</h1>
            </div>
      </div>
    );
  }

export default MovieCard