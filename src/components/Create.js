import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    userId: "",
    title: "",  
    body: ""
  });

  const { name, userId, title, body } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value }); //Assigning the value entered,to the assigned name of each area in form   and updating the user
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://crud-server-heroku.herokuapp.com/users", user);      //Used ot post the data on server
    history.push("/");      //This redirect us to homepage, after posting the data
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Create a post!</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Id"
              name="userId"
              value={userId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the title of your post"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your post"
              name="body"
              value={body}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;