import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProjectGenerator from "./ProjectGenerator";


const Login= ({setCurrentUser}) => {

  const countReducer = useSelector(state => state.countReducer)
  const dispatch = useDispatch()

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
    })
    .then((res) => {

      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
          console.log(user.name)
          
        })
        .then(() => navigate("/profile"))
      } else {
        res.json().then((errors) => {
          console.error(errors);
        }).then(() => navigate("/login/error"))
      }
    });
  
  }

  function navigateBack(){
    navigate("/")
  }

    return ( 
      <>

  <h1 className="formTitle">Login</h1>

  <div className="formdiv">

    
    {/* <h2>Counter redux test {countReducer} </h2>  
    <button onClick={()=> dispatch(increment())}>Test Redux</button>
         */}

    <form onSubmit={handleSubmit}>

    <div className="form-special">
        {/* <label for="exampleInputEmail1">TEST USER AVATAR</label>
        <input type="file" name="profile" onChange={handleChange} class="form-control"  placeholder="Upload image"/>
      <div class="form-group">
    </div> */}

        <label for="exampleInputEmail1">Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control"  placeholder="Enter Username"/>
      
      </div>
      <div className="form-special">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-check">
      
      </div>
      <div className="formButton">
      <button className="btn btn-primary" type="submit">Submit</button> 
      <button className="btn btn-primary" onClick={navigateBack}> Back</button> 


      <div className="loginimage-div">
      <img className="login-image" src= "https://media0.giphy.com/media/wHoEnL75Jm9O16zgNE/giphy.gif" />

    </div>

    </div>
    </form>
</div>

</>
)}
export default Login