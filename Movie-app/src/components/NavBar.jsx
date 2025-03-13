import {Link} from "react-router-dom"
import "../css/NavBar.css"

function NavBar () {
    return (
        <nav className="nav-bar">
            <div className="nav-brand">
                <Link to="/" className="brand">Movies</Link>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="Favorites" className="nav-link">Favorite</Link>
            </div>
        </nav>
    )
}

export default NavBar