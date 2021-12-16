import { useNavigate } from "react-router-dom";


function Profile({currentUser, setCurrentUser}){
console.log(currentUser)
let navigate = useNavigate()

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
       <h1>Profile</h1>
       <h2>Welcome {currentUser.username}</h2>
       <button>My Projects</button>
       <button onClick={handleLogout}>Logout</button>
       </>
    )
}


export default Profile