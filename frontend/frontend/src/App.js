import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom'
import React, { useState,useEffect } from "react";
import Login from './Components/Login';

function App() {
  const [currentUser, setCurrentUser] = useState({});

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
    </Routes>
    </>
  );
}

export default App;
