import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CalendarFeature from "./CalendarFeature";

function EditEntryForm({entries, id, edited, setEdited, setToggle, test1, setTest1, setYear, setMonth, setDay}){

  console.log(test1)

  const onChange2 =()=>{
     setYear(`${entries.due_date}`)
  }
 
  console.log(test1)

let navigate = useNavigate()

function navigateToProjects(){
  navigate(`/projects/${id}`)
}

    const [currentEntry, setCurrentEntry] = useState({});
    const [duedate, setduedate] = useState({})
    console.log(duedate)
    
    
    const [formData, setFormData] = useState({
       
        title: `${entries.title}`,
        details: `${entries.details}`,
        image: `${entries.image}`,
        tag: `${entries.tag}`,
        project_id:`${entries.project_id}`,
        due_month: `${entries.due_month}`,
        due_date: `${entries.due_date}`,
        due_year: `${entries.due_year}`,
      

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
        <label for="image">Tag</label>
        <input type="text" className="form-control" id="tag" name="tag"   value={formData.tag} onChange={handleChange} />
    </div>
    <div className="form-group">
        <label for="image">Image</label>
        <input type="text" className="form-control" id="image" name="image"   value={formData.image} onChange={handleChange} />
    </div>
    <div className="form-group">   
    
    
     <div className="form-group">
      {/* <CalendarFeature setduedate={setduedate}/> */}
        <label for="image">Due Month</label>
        <input type="text" className="form-control" id="due_month" name="due_month" value={formData.due_month} onChange={handleChange} placeholder=""/>
    </div>

      {/* <CalendarFeature setduedate={setduedate}/> */}
        <label for="image">Due Date</label>
        <input type="text" className="form-control" id="due_date" name="due_date" value={formData.due_date} onChange={handleChange} placeholder=""/>
    </div>

    <div className="form-group">
      {/* <CalendarFeature setduedate={setduedate}/> */}
        <label for="image">Due Year</label>
        <input type="text" className="form-control" id="due_year" name="due_year" value={formData.due_year} onChange={handleChange} placeholder=""/>
    </div>



    <div className ="formbuttondiv">
    <button type="submit" className="general-button2">Submit</button>
    </div>
 </form>   
 {/* <button onClick={change}>test</button> */}
        </>
    )
}


export default EditEntryForm