import React, { useState } from "react";
import { Link } from "react-router-dom";


//SIGNUP FUNCTIONALITY

const Signup= () => {
  
  const [currentUser, setCurrentUser] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

//JSX BEGINGS HERE

    return ( 
<>

<h1 className="formTitle"> Signup</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control"  placeholder="Enter Username"/>
      
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>

      <div className="form-check">
      
      </div>
      <div className="formButton">
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link className="btn btn-primary" to="/"> Back</Link>
      </div>
    </form>
</>
)


}


export default Signup