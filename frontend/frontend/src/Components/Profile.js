import { useNavigate } from "react-router-dom";


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
      <h1>Welcome {currentUser.username}</h1> 
       <h3>Another day, another project!</h3>
       

      <div className = "profileDiv">
       <img className="profileImage" src="https://thispersondoesnotexist.com/image" />
      </div>

       <button className="btn btn-primary" onClick={navigateToProjects}>My Projects</button>     
       <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
       </div>
       </>
    )
}


export default Profile