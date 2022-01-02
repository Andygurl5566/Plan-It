import { useNavigate } from "react-router-dom";



function Profile({currentUser, setCurrentUser, currentAvatar}){
console.log(currentUser.user.bio)
// console.log(currentUser.avatar)
// console.log(currentAvatar)
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
      <h1 className="biotitle">Welcome {currentUser.user.name}!</h1> 
       <p>Another day, another project</p>
       

      <div className = "profileDiv">
       <img className="profileImage" src={currentUser.avatar} 
      //  src={"https://thispersondoesnotexist.com/image"}
       />
      </div>
        <p></p>
      <div className="biodiv">
        <p>{currentUser.user.bio}</p>
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