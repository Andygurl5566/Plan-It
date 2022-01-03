import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NewEntryForm({toggle, setToggle, edited, setEdited}){

   
    let navigate = useNavigate()
    const [currentEntry, setCurrentEntry] = useState({});
    const {project_id} = useParams()
    const [formData, setFormData] = useState({
       
        title: "title",
        details: "details",
        image: "image",
        project_id:`${project_id}`,
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
              .then(() => navigate(`/projects/${project_id}`))
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
            navigate(`/projects/${project_id}`)
          }

    return(
        <>
        <form onSubmit={handleSubmit}>
    <div className="entryform">
        <label for="title">Entry Title</label>
        <input type="text" className="form-control" id ="title" name="title"  onChange={handleChange} />
    </div>
    <div className="entryform">
        <label for="details">Details</label>
        <input type="text" className="form-control" id="details" name="details"  onChange={handleChange} />
    </div>
    <div className="entryform">
        <label for="image">Image</label>
        <input type="text" className="form-control" id="image" name="image"  onChange={handleChange} />
    </div>

    <div className ="formButton2">
    <button type="submit" className="formbtn">Submit</button>
    <button className="formbtn" onClick={ ()=> setToggle(!toggle)}> Back </button>
    </div>
 </form>   
        </>
    )

}


export default NewEntryForm