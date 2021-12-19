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
        <div className="pageheader"> 
        <img className="landingImage" src="https://opendoodles.s3-us-west-1.amazonaws.com/meditating.png" />
            {/* <img className="logo" src="http://cdn.onlinewebfonts.com/svg/img_535375.png" /> */}
        </div> 

        <div className="subheader">
           <h1 class="header">Plan It</h1>
            <h3>Organize your universe one task at a time</h3>

            <div className="buttondiv">    
                <button class="btn btn-dark" onClick={navigateToLogin}>Login</button>
                <button class="btn btn-dark" onClick={navigateToSignup}>Signup</button>
            </div>  
        </div>
        </>
    )
}



export default Landing