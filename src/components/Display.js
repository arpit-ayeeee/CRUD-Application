import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Display = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadPosts();
    },[]);

    const loadPosts = async () => {
        const res = await axios.get("http://localhost:3001/users");
        setUser(res.data.reverse()); 
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadPosts(); //So that page gets refreshed
    }

    return(
        <div className="container mt-5">
            <button className="btn-primary btn-lg shadow mb-3 border"><em>Feeds</em></button>
            <div className="row">
                {
                    users.map((user) => (
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
    );
}

export default Display;