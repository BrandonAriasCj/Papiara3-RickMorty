import { Link } from "react-router";
const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Rick and Morty API</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-4">
                    <Link to="/">home</Link>
                </li>
                <li className="nav-item px-4">
                    <Link to="/listar">Listar</Link>
                </li>
                <li className="nav-item px-4">
                <Link to="/contactos">Constactos</Link>
                </li>
            </ul>
            <span className="navbar-text">
                Navbar text with an inline element
            </span>
            </div>
        </div>
        </nav>
        </>
    )

}

export default Header;