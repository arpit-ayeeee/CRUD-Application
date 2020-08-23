import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Display = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadPosts();
    },[]);

    const loadPosts = async () => {
        const res = await axios.get("https://crud-server-heroku.herokuapp.com/users");
        setUser(res.data.reverse()); 
    }

    const deleteUser = async id => {
        await axios.delete(`https://crud-server-heroku.herokuapp.com/users/${id}`);
        loadPosts(); //So that page gets refreshed
    }
    return(
        <div className="container mt-5">
            <button className="btn-primary btn-lg shadow mb-3 border"><em>Feeds</em></button>
            <div className="row">
                {
                    users.map((user) => (
                        <div className="col-12 col-md-6 col-lg-4" key={user.id}>
                            <div className="card">
                                <div className="card-header bg-dark">
                                    {user.title}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">By user {user.userId} </h5>
                                    <p className="card-text">{user.body}</p>
                                </div>
                                <div className="card-footer bg-white">
                                    <Link to={`/edit/${user.id}`} className="btn btn-success btn-sm mr-1">Edit post</Link>
                                    <Link className="btn btn-danger btn-sm mr-1" onClick={() => deleteUser(user.id)}>Delete post</Link>
                                    <Link className="btn btn-primary btn-sm mr-1 visible-md">Like</Link>
                                    <Link className="btn btn-secondary btn-sm visible-md">Dislike</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Display;