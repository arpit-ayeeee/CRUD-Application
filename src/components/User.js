import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const User = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers(); 
    },[]);       //[] is for the dependency, which defines how many time function will execute 
    
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");        //axios calls fake api, JS executes code line by line, so await keyword wait for the code after it to get executed and then only shift to execute next line
        setUser(result.data.reverse()); 
    }

    const deleteUser = async userId => {
        await axios.delete(`http://localhost:3001/users/${userId}`);
        loadUsers(); //So that page gets refreshed
    }
    const us = users.filter((user) => user.name ? true : null);
    return(
        <div className="container">
            <div className="py-4">
                <button className="btn-primary btn-lg shadow mb-3 border"><em>Users</em></button>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Sr No</th>
                            <th scope="col">Name</th>
                            <th scope="col">ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            us.map((user) => (
                                <tr>
                                    <th scope="row">-></th>
                                    <td>{user.name}</td>
                                    <td>{user.userId}</td>
                                    <td><Link className="btn btn-danger" onClick={() => deleteUser(user.userId)}>Delete user</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                 </table>
            </div>
        </div>
    )
}
 
export default User;