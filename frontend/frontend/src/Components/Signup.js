import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//SIGNUP FUNCTIONALITY

const Signup= ({setCurrentUser, online, setOnline}) => {
  
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    
  });

  const handleOnline =()=>{
    setOnline(true)
  }

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
        })
        .then(()=> handleOnline())
        .then(() => navigate("/profile"))
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  function navigateBack(){
    navigate("/")
  }


    return ( 
<>

<h1 className="formTitle"> Signup</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-special">
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
      <button type="submit" className="btn btn-primary">Submit</button>
      <button className="btn btn-primary" onClick={navigateBack}> Back</button> 
      <div className="signupimage-div">
      <img className="signup-image" src= "https://media0.giphy.com/media/5xtDarBbqdSQxfGFdNS/giphy.gif?cid=ecf05e47itwsgia6swwgrj37r88su49fybeg37xz18cj7kd0&rid=giphy.gif&ct=g" />
    </div>
      </div>
    </form>
</>
)


}


export default Signup