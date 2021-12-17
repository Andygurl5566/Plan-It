import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from "react";

function EditProjectForm({id, project, edited, setEdited}){

   
    const [currentProject, setCurrentProject] = useState({});
    const [toggle, setToggle] = useState(false);

   
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        description:"",
        user_id: `${project.user_id}`
      
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/projects/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          
          }).then((res) => {
              console.log(res)
              if (res.ok) {
                res.json().then((project) => {
                  
                  setCurrentProject(project)
                  setEdited(!edited)
                })
                
              } else {
                res.json().then((errors) => {
                  console.error(errors);
                });
              }
            });
          
          }
        function handleToggle(){
            
            setToggle(!toggle)
            console.log(toggle)
        }

       



    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className='newforms'>
              <div className="form-group">
              <label>Project Name</label>
              <input type="text" class="form-control" name="title" id="title" onChange={handleChange}  placeholder="Project Name"/>
              
              <label>Description</label>
              <input type="text" class="form-control" name="description" id="title" onChange={handleChange}  placeholder="Optional Description"/>

              <label>Image</label>
              <input type="text" class="form-control" name="image" id="image" onChange={handleChange}  placeholder="Image"/>
              {/* Will make this a file upload with active storage? */}

              {/* <button onClick={handleToggle}>More Options</button>

              {toggle == true? <h1>hi</h1> : "" }

              <label>Start Date</label>
              <input type="text" class="form-control" name="start_date" id="start_date" onChange={handleChange}  placeholder="Start Date"/>

              <label>Due Date</label>
              <input type="text" class="form-control" name="title" id="title" onChange={handleChange}  placeholder="Due Date"/>

              <label>Tag</label>
              <input type="text" class="form-control" name="title" id="title" onChange={handleChange}  placeholder="Tag"/> */}


                  <div className ="formbuttondiv">
                      <button type = "submit" className="btn btn-primary"> Submit </button>
                     
                  </div>
              </div>
            </div>
        </form>

        </>
    )
}

export default EditProjectForm