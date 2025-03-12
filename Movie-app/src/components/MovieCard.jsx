
function MovieCard({ movie }) {
    return (
      <div className='movie-card'>
            <div className="movie-img">
                <img src="" alt="" />
                <div className="movie-overlay">
                    <button>
                        <p>♡</p>
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <h1>{movie.releaseDate}</h1>
            </div>
      </div>
    );
  }

export default MovieCard