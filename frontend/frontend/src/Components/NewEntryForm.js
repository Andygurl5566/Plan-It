import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NewEntryForm(){

    const [toggle, setToggle] = useState(false);
    let navigate = useNavigate()
    const [currentEntry, setCurrentEntry] = useState({});
    const [edited, setEdited] = useState({}) 
    // Temp above
    const {project_id} = useParams()
    const [formData, setFormData] = useState({
       
        title: "title",
        details: "details",
        image: "image",
        project_id:`${project_id}`
      

    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/entries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
              res.json().then((entry) => {
                setCurrentEntry(entry);
              })
              .then(() => navigate(`/project/${project_id}`))
              .then(() => setToggle(!toggle))
              .then(() => setEdited(!edited))
            } else {
              res.json().then((errors) => {
                console.error(errors);
              });
            }
          });
        
        }

        
        function navigateBack(){
            navigate(`/projects${project_id}`)
          }

    return(
        <>
        <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label for="title">Entry Title</label>
        <input type="text" className="form-control" id ="title" name="title" value={formData.title} onChange={handleChange} />
    </div>
    <div className="form-group">
        <label for="details">Details</label>
        <input type="text" className="form-control" id="details" name="details" value={formData.details} onChange={handleChange} />
    </div>
    <div className="form-group">
        <label for="image">Image</label>
        <input type="text" className="form-control" id="image" name="image" value={formData.image} onChange={handleChange} />
    </div>

    <div className ="formbuttondiv">
    <button type="submit" className="btn btn-primary">Submit</button>
    <a href="#" onClick={navigateBack} className="btn btn-primary"> Back </a>
    </div>
 </form>   
        </>
    )

}


export default NewEntryForm