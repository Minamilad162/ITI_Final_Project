import react from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss';

export default function Nav() {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const token = localStorage.getItem('token');
    let logged;
    if (token) {
        logged = true;
    } else {
        logged = false;
    }

    return (
        <div id="nav">
            <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        Netflix
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        {logged ? (
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/movies">
                                        Movies
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/series">
                                        Series
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Settings
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link class="dropdown-item" to="/Payment">
                                                Edit Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                               Payment
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a class="dropdown-item" onClick={logout} href='#'>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        ) : (
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
