import {useNavigate} from 'react-router-dom'
import React, { useState } from "react";


function NewProjectForm(){

    let navigate = useNavigate()
    const [currentProject, setCurrentProject] = useState({});
    const [toggle, setToggle] = useState(false);

   
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        description:"",
        tag:"None"
        
        

    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
            console.log(res)
            if (res.ok) {
              res.json().then((project) => {
                setCurrentProject(project);
              })
              .then(() => navigate("/projects"))
            } else {
              res.json().then((errors) => {
                console.error(errors);
              });
            }
          });
        
        }

      

        function navigateBack(){
          navigate("/projects")
        }



    return(
        <> 
        <h1 className='formTitle'> New Project</h1>
        <form onSubmit={handleSubmit}>
            <div className='newprojectform'>
              <div className="form-group">
              <label>Project Name</label>
              <input type="text" className="form-control" name="title" id="title" onChange={handleChange} value={formData.title}  placeholder="Project Name"/>
              
              <label>Description</label>
              <input type="text" className="form-control" name="description" id="description" onChange={handleChange} value={formData.description} placeholder="Optional Description"/>

              <label>Image</label>
              <input type="text" className="form-control" name="image" id="image" onChange={handleChange} value={formData.image} placeholder="Image"/>

                  <div className ="formbuttondiv">
                      <button type = "submit" className="formbtn"> Submit </button>
                      <button  onClick={navigateBack} className="formbtn"> Close </button>
                  </div>
              </div>
            </div>
        </form>

        </>
    )
}

export default NewProjectForm