import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom'
import React, { useState,useEffect } from "react";
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentAvatar, setCurrentAvatar] = useState({});

  useEffect(() => {
    fetch('/me')
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user)
        
        
        })
  }, [])



  return (
    <>
    <Routes>
      <Route path = "/login" element={<Login />}/>
      <Route path = "/profile" element={<Profile />}/>
    </Routes>
    </>
  );
}

export default App;
