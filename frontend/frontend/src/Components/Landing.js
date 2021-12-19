import {useNavigate} from "react-router-dom"

function Landing(){

    let navigate = useNavigate()
    function navigateToLogin(){
        navigate("/login")
    }

    
    function navigateToSignup(){
        navigate("/signup")
    }


    return(
        <>
        <div className="landingpageheader"> 
        <h1 class="header">-PLAN IT-</h1>
        
        <img className="landingImage" src="https://opendoodles.s3-us-west-1.amazonaws.com/meditating.png" />
        </div> 

        <div className="subheader">
           
            <h3>Organizing your universe one project at a time.</h3>

            <div className="buttondiv">    
                <button class="loginbtn" onClick={navigateToLogin}>Login</button>
                <button class="loginbtn" onClick={navigateToSignup}>Signup</button>
            </div>  
        </div>
        </>
    )
}



export default Landing