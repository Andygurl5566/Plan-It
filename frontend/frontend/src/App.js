import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet, Link, Route, Routes } from 'react-router-dom'
import React, { useState,useEffect } from "react";
import { Container } from 'react-bootstrap';
import Login from './Components/Login';
import Profile from './Components/Profile';
import NavBar from './Components/NavBar';
import ProjectsPage from './Components/ProjectsPage';
import Signup from './Components/Signup';
import Landing from './Components/Landing';
import EntryPage from './Components/EntryPage';
import NewProjectForm from './Components/NewProjectForm';




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

    <Routes>

      <Route path = "/login" element={<Login />}/>
      <Route path = "/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      <Route path = "/projects" element={<ProjectsPage currentUser={currentUser} />}/>
      <Route path = "/signup" element={<Signup />}/>
      <Route path = "/" element={<Landing />}/>
      <Route path = "/entries" element={<EntryPage currentUser={currentUser} />}/>
      <Route path = "/new_project" element={<NewProjectForm />}/>

    </Routes>

    
    </>
  );
}

export default App;
