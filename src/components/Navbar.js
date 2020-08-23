import React from 'react';
import {NavLink, Link} from 'react-router-dom';
 
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a><Link to="/" className="navbar-brand"><em>CRUD</em></Link></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact to="/" className="nav-link"><span className="fa fa-feed fa-sm">Feeds</span></NavLink>
                                    {/* Used exact, so that there is no by default active link */}
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/user" className="nav-link"><span className="fa fa-user fa-sm">Users</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/search" className="nav-link"><span className="fa fa-search fa-sm">Search</span></NavLink>
                                </li>
                            </ul>
                    </div>
                    <form className="form-inline  my-lg-0">
                            <Link to="/create"><button className="btn btn-outline-light my-2 my-sm-0">Create</button></Link>
                    </form>
        </nav>
    )
}

export default Navbar;