import react from "react";
import "./Nav.scss";

export default function Nav() {
    const token = localStorage.getItem("token");
    let logged;
    if (token) {
        logged = true;
    } else {
        logged = false;
    }

    return (
        <div id="nav">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Netflix
                    </a>
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
                    <div
                        class="collapse navbar-collapse justify-content-end"
                        id="navbarNavDropdown"
                    >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            {
                            logged ? (
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown link
                                    </a>
                                    <ul
                                        class="dropdown-menu"
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Login
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
