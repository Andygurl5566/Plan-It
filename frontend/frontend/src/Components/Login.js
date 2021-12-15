import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login= ({setCurrentUser}) => {

  let navigate = useNavigate()
  
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
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user); 
          console.log(user.name)

        })
        // .then(() => navigate("/welcome"))
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  
  }

    return ( 
<>
    <h1>Login</h1>  
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} class="form-control"  placeholder="Enter Email"/>
      
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
      
      </div>
      <button class="btn btn-primary" type="submit">Submit</button> 
      
      <Link class="btn btn-primary" to="/"> Back</Link> 
    </form>
</>
)}
export default Login