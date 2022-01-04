import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CalendarFeature from "./CalendarFeature";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";



function EditEntryForm({entries, id, edited, setEdited, setToggle}){

  
let navigate = useNavigate()

const [date, setDate] = useState(new Date())

    const [currentEntry, setCurrentEntry] = useState({});
    const [duedate, setduedate] = useState({})
    console.log(duedate)
    
    const [formData, setFormData] = useState({
       
        title: `${entries.title}`,
        details: `${entries.details}`,
        image: `${entries.image}`,
        tag: `${entries.tag == "" ? "None" : entries.tag}`,
        project_id:`${entries.project_id}`,
        
        due_date: `${entries.due_date}`,
        
      

    });

    console.log(formData)


    const onChange2 = date => {
      let newDate = date.toISOString().slice(0,16)
      setDate(date)
      console.log(date)
      console.log(date.toString().slice(0,16))
      console.log(date.toISOString().slice(0,16))
      
  
  }

    function navigateToProjects(){
      navigate(`/projects/${id}`)
    } 
    
    

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
        <input type="text" required className="form-control" id ="title" name="title"  value={formData.title} onChange={handleChange} />
    </div>
    <div className="form-group">
        <label for="details">Details</label>
        <input type="text" className="form-control" id="details" name="details"  value={formData.details}  onChange={handleChange} />
    </div>
    <div className="form-group">
        <label for="image">Image</label>
        <input type="text" className="form-control" id="image" name="image"   value={formData.image} onChange={handleChange} />
    </div>
    <div className="form-group">   
     
        <label for="image">Due Date</label>
        <input type="datetime-local" className="form-control" id="due_date" name="due_date" value={formData.due_date} onChange={handleChange} />
    </div>

    <div className="form-group">
        <label for="image">Tag</label>
        <input type="text" className="form-control" id="tag" name="tag"   value={formData.tag} onChange={handleChange} placeholder="None" />
    </div>


    <div className ="formbuttondiv">
    <button type="submit" className="general-button2">Submit</button>
    </div>
 </form>   
 
        </>
    )
}


export default EditEntryForm