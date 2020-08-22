import React from 'react';
import {NavLink, Link} from 'react-router-dom';
 
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container">
                <Link to="/" className="navbar-brand">CRUD</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggle" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggle">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Feeds</NavLink>
                            {/* Used exact, so that there is no by default active link */}
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/user" className="nav-link">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/search" className="nav-link">Search</NavLink>
                        </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <Link to="/create"><button className="btn btn-outline-light my-2 my-sm-0">Create Post</button></Link>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;