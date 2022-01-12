import { useNavigate } from "react-router-dom";



function PleaseLogIn(){
    
    let navigate = useNavigate()

    function navigatetoLogin(){
        navigate("/login")
      }

      function navigatetoSignup(){
        navigate("/signup")
      }


    return(
    <>
<div className="pleaseLogIn">
    <h1 className="formTitle">Uh Oh!</h1>
    <p>Looks like you're not logged in - Let's fix that</p>
    <img className="pleaselogin-image" src= "https://media1.giphy.com/media/Yh6NctLu7jody/giphy.gif?cid=ecf05e470fa12c37012a9c91657c1acb9b2303dd77b1c406&rid=giphy.gif&ct=g" />
<div>
<button className="btn btn-primary" onClick={navigatetoLogin}> Login </button> 
<button className="btn btn-primary" onClick={navigatetoSignup}> Signup </button> 

</div>

</div>
    </>
    )
}


export default PleaseLogIn