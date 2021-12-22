import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditEntryForm({entries, id, edited, setEdited, setToggle}){

let navigate = useNavigate()

function navigateToProjects(){
  navigate(`/projects/${id}`)
}

    const [currentEntry, setCurrentEntry] = useState({});
    
    const [formData, setFormData] = useState({
       
        title: `${entries.title}`,
        details: `${entries.details}`,
        image: `${entries.image}`,
        project_id:`${entries.project_id}`
      

    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/entries/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
              res.json().then((entries) => {
                setCurrentEntry(entries);
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
    <div className="form-group">
        <label for="title">Entry Title</label>
        <input type="text" className="form-control" id ="title" name="title"  value={formData.title} onChange={handleChange} />
    </div>
    <div className="form-group">
        <label for="details">Details</label>
        <input type="text" className="form-control" id="details" name="details"  value={formData.details}  onChange={handleChange} />
    </div>
    <div className="form-group">
        <label for="image">Image</label>
        <input type="text" className="form-control" id="image" name="image"   value={formData.image} onChange={handleChange} />
    </div>

    <div className ="formbuttondiv">
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
 </form>   
        </>
    )
}


export default EditEntryForm