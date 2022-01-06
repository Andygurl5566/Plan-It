import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'



function EditProfile({currentUser, setCurrentUser}){
    console.log(currentUser)
    let navigate = useNavigate()

    const {id} = currentUser

    const [formData, setFormData] = useState({
        name: `${currentUser.name}`,
        bio:`${currentUser.bio}`,
        image: `${currentUser.image}`,
       
    })
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/users/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          
          }).then((res) => {
              console.log(res)
              if (res.ok) {
                res.json().then((user) => {
                  
                  setCurrentUser(user)
                
                })
                .then(()=> navigate("/profile"))
                
              } else {
                res.json().then((errors) => {
                  console.error(errors);
                });
              }
            });
          
          }

          function navigateBack(){
            navigate("/profile")
          }

          
    

    return(
        <>

        {/* <h5>Image Preview</h5> */}

        <button type = "back" className="formbtnedit2" onClick={navigateBack}> Back </button>
        <div className="profileDivpreview">
        <img className="profileImagepreview" src = {currentUser.image == null ? "https://i.imgur.com/Fo8ESgi.jpg" : `${currentUser.image}`} />
                    <p className="preview">Image Preview</p>
</div>

        <form onSubmit={handleSubmit}>
            <div className='newforms'>
              <div className="newprojectform2">
              <label>Name</label>
              <input type="text" required className="form-control" name="name" id="name" onChange={handleChange} value={formData.name} placeholder="Project Name"/>
              

              <label>Image</label>
              <input type="text" className="form-control" name="image" id="image" onChange={handleChange}  value={formData.image} placeholder="Image"/>
              <div className ="formbuttondiv">

              <label>Bio</label>
              <input type="text"  className="form-control" name="bio" id="bio" onChange={handleChange} value={formData.bio} placeholder="Optional bio"/>


                      <button type = "submit" className="formbtn"> Submit </button>
                     
                  </div>
              </div>
            </div>
        </form>
        
        
        </>
    )
}


export default EditProfile