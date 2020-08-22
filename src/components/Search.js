import React, { useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Search = () => {
    const [users, setUser] = useState([]);
    const [term, setTerm] = useState([]);

    useEffect(() => {
        loadPosts();
    },[]);

    const loadPosts = async () => {
        const res = await axios.get("https://crud-server-heroku.herokuapp.com/users");
        setUser(res.data); 
    }
    const deleteUser = async id => {
        await axios.delete(`https://crud-server-heroku.herokuapp.com/users/${id}`);
        loadPosts(); //So that page gets refreshed
    }
    const searchHandler = e => {
        setTerm(e.target.value);
    }
    
    return(
        <div className="container mt-5">
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                <h1 className="display-4 mb-3">
                    <i className="fa fa-search" /> Search for posts
                </h1>
                <form>
                    <input type="text" placeholder="Search user's posts by typing their name here ..." value={term} onChange={searchHandler}  className="form-control"/>
                </form>
                </div>
            </div>
            <div className="row">
                {
                    users.filter((user) => user.name === term ? true : false).map((user) => (
                        <div className="col-12 col-sm-6 col-md-4" key={user.id}>
                            <div className="card">
                                <div className="card-header bg-dark">
                                    {user.title}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">By user {user.userId} </h5>
                                    <p className="card-text">{user.body}</p>
                                </div>
                                <div className="card-footer bg-white">
                                    <Link to={`/edit/${user.id}`} className="btn btn-success btn-sm mr-2">Edit post</Link>
                                    <Link className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete post</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Search;