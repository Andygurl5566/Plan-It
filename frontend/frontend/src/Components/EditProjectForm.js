import React, { useState } from "react";

function EditProjectForm({id, project, edited, setEdited, setToggle}){

   
    const [currentProject, setCurrentProject] = useState({});
   

   
    const [formData, setFormData] = useState({
        title: `${project.title}`,
        image: `${project.image}`,
        description:`${project.description == null | "" ? "" : project.description}`,
        tag:`${project.tag == null | "" ? "None" : project.tag}`,
        user_id: `${project.user_id}`
      
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
         
        });
        console.log(project.title)
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
                .then(setToggle(false))
                
              } else {
                res.json().then((errors) => {
                  console.error(errors);
                });
              }
            });
          
          }
       


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className='newforms'>
              <div className="form-group">
              <label>Project Name</label>
              <input type="text" className="form-control" name="title" id="title" onChange={handleChange} value={formData.title} placeholder="Project Name"/>
              
              <label>Description</label>
              <input type="text" className="form-control" name="description" id="description" onChange={handleChange} value={formData.description} placeholder="Optional Description"/>

              <label>Image</label>
              <input type="text" className="form-control" name="image" id="image" onChange={handleChange}  value={formData.image} placeholder="Image"/>
             
              <label>Tag</label>
              <input type="text" className="form-control" name="tag" id="tag" onChange={handleChange}  value={formData.tag} placeholder="Tag"/>

              

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
                      <button type = "submit" className="edit-button"> Submit </button>
                     
                  </div>
              </div>
            </div>
        </form>

        </>
    )
}

export default EditProjectForm