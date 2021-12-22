import { useNavigate } from "react-router-dom";
import ProjectGenerator from "./ProjectGenerator";


function Profile({currentUser, setCurrentUser}){
console.log(currentUser)
let navigate = useNavigate()

function navigateToProjects(){
  navigate("/projects")
}

const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(() => navigate("/"))
    .then(res => { 
        console.log(res);
          if (res.ok) {
            setCurrentUser(null)
            console.log('you logged out');
          }
        })
        
  }



    return (
       <>
      <div className="bioheader">
      <h1 className="biotitle">Welcome {currentUser.username}!</h1> 
       <p>Another day, another project</p>
       

      <div className = "profileDiv">
       <img className="profileImage" src="https://thispersondoesnotexist.com/image" />
      </div>
        <p></p>
      <div className="biodiv">
        <p>{currentUser.bio}</p>
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