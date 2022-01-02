import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet, Link, Route, Routes } from 'react-router-dom'
import React, { useState,useEffect } from "react";
import Login from './Components/Login';
import Profile from './Components/Profile';
import NavBar from './Components/NavBar';
import ProjectsPage from './Components/ProjectsPage';
import Signup from './Components/Signup';
import Landing from './Components/Landing';
import EntryPage from './Components/EntryPage';
import NewProjectForm from './Components/NewProjectForm';
import EditProjectForm from './Components/EditProjectForm';
import NewEntryForm from './Components/NewEntryForm';
import ProjectDetail from './Components/ProjectDetail';
import EntryDetail from './Components/EntryDetail';
import EditEntryForm from './Components/EditEntryForm';
import ProjectGenerator from './Components/ProjectGenerator';
import AddPrompt from './Components/AddPrompt';
import LoginError from './Components/LoginError';
import FlexProjectDetail from './Components/FlexProjectDetail';
import CalendarFeature from './Components/CalendarFeature';
import { useNavigate } from "react-router-dom";

function Page404(){
return( 
<h2 className='prompttitle'> 404 - Nothing to see here</h2>)
 
}




function App() {
  

  const [currentUser, setCurrentUser] = useState({});
  const [projectList, setProjects] = useState([])
  const [edited, setEdited] = useState(true)
  let navigate = useNavigate()

  // const [currentAvatar, setCurrentAvatar] = useState({});

  useEffect(() => {
    fetch('/me')
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user)
        
        
        })
  }, [])

  useEffect(() => {
    fetch('/projects')
        .then((r) => r.json())
        .then((projects) => {
          
            setProjects(projects)
            // console.log(projects)
        })
}, [edited])

const handleLogout = () => {
  fetch('/logout', {method: "DELETE"})
  .then(() => navigate("/"))
  .then(res => { 
      console.log(res);
        if (res.ok) {
          setCurrentUser(null)
          console.log('you logged out');
        }
      })
      
}

  return (
    <>
    <NavBar handleLogout={handleLogout} currentUser={currentUser}/>
    <Outlet/>

    <Routes>

      <Route path = "/" element={<Landing />}/>
      <Route path = "/login" element={<Login setCurrentUser={setCurrentUser}/> }/>
      <Route path = "/profile" element={<Profile currentUser={currentUser} handleLogout ={handleLogout} setCurrentUser={setCurrentUser}/>}/>
      <Route path = "/signup" element={<Signup setCurrentUser={setCurrentUser} />}/>

      <Route path = "/projects" element={<ProjectsPage currentUser={currentUser} />}/>
      <Route path = "/entries" element={<EntryPage currentUser={currentUser} />}/>

      <Route path = "/project/edit" element={<EditProjectForm />}/>
       <Route path = "/entry/edit" element={<EditEntryForm />}/>

      <Route path = "/new_entry" element={<NewEntryForm/>}/>
      <Route path = "/new_project" element={<NewProjectForm />}/>

      <Route path = "/projects/:project_id" element={<ProjectDetail />}/>
      <Route path = "/entries/:entry_id" element={<EntryDetail />}/>
      {/* <Route path = "*" element={< Error/>}/> */}

      <Route path ="/generate" element={<ProjectGenerator/>}/>
      <Route path ="/addprompt" element={<AddPrompt/>}/>
      <Route path ="/login/error" element={<LoginError setCurrentUser={setCurrentUser}/>}/>
      <Route path ="/flex/:project_id" element={<FlexProjectDetail/>}/>
      <Route path ="/calendar" element={<CalendarFeature/>}/>


      <Route path ="*" component={Page404}/>
    </Routes>

    </>
  );
}

export default App;
