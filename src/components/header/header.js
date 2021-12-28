import React from "react";
import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
            <div className="header d-flex container-fluid">
                <h3>
                    <a className="navbar-brand header-logo" href="#">
                        Star DB
                    </a>
                </h3>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarColor01" >
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">People
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Planets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Starships</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Header
