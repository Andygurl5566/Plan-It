import { useNavigate } from "react-router-dom";




function Profile({currentUser, handleLogout}){
console.log(currentUser.image)
let navigate = useNavigate()

function navigateToProjects(){
  navigate("/projects")
}
function profileEditNav(){
  navigate("/edit-profile")
}



    return (
       <>
      <div className="bioheader">
      <h1 className="biotitle">Welcome {currentUser.name == null? currentUser.username : currentUser.name}!</h1> 
       <p>Another day, another project </p>
       
       

      <div className = "profileDiv">
       <img className="profileImage" src = {currentUser.image == null ? "https://i.imgur.com/Fo8ESgi.jpg" : `${currentUser.image}`} />
       
      </div>
      <button className="profilebtnedit" onClick={profileEditNav}>Edit Profile</button>  

        <p></p>
      <div className="biodiv">
        <p>{currentUser.bio == null? `Welcome to Plan It! Create your first project by visiting "My Projects" below.` : currentUser.bio}</p>
        
      </div>
      <div className="profilebuttondiv">
       <button className="profilebtn" onClick={navigateToProjects}>My Projects</button>   
       <button className="profilebtn" onClick={handleLogout}>Logout</button>
       </div>
       </div>



       <div className=""></div>
    
       </>
    )
}


export default Profile