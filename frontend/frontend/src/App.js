import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet, Link, Route, Routes } from 'react-router-dom'
import React, { useState,useEffect } from "react";
import { Container } from 'react-bootstrap';
import Login from './Components/Login';
import Profile from './Components/Profile';
import NavBar from './Components/NavBar';
import ProjectsPage from './Components/ProjectsPage';



function App() {
  const [currentUser, setCurrentUser] = useState({});
  // const [currentAvatar, setCurrentAvatar] = useState({});

  useEffect(() => {
    fetch('/me')
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user)
        
        
        })
  }, [])



  return (
    <>
    <NavBar/>
    <Outlet/>

    {/* <Container> */}
    <Routes>

      <Route path = "/login" element={<Login />}/>
      <Route path = "/profile" element={<Profile />}/>
      <Route path = "/projects" element={<ProjectsPage />}/>
    </Routes>

    {/* </Container> */}
    </>
  );
}

export default App;
