import {useNavigate} from "react-router-dom"
import ProjectGenerator from "./ProjectGenerator"

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
        <h3 className="subheader">Plan to do what you love to do.</h3>

        <div className="landingpage-background">      
        <img className="landingImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34c52563799919.5abc9eb3f3f75.gif" />
        <img className="landingImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6162ae17485889.562e83a6e5f6f.gif" />
        <img className="landingImage" src= "https://www.maorisakai.com/wp-content/uploads/2021/07/rainday-2.gif" />
        <img className="landingImage" src= "https://media2.giphy.com/media/3o7abs0vn1ZKFf74uk/giphy.gif" />
        <img className="landingImage" src= "https://editorial.designtaxi.com/news-gif0809/1.gif" />
        <img className="landingImage" src= "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4352817485889.562ba9088a5a3.gif" />
        <img className="landingImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34c52563799919.5abc9eb3f3f75.gif" />
        <img className="landingImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6162ae17485889.562e83a6e5f6f.gif" />

        {/* <img className="landingImage" src= "https://editorial.designtaxi.com/news-gif0809/1.gif" /> */}

        
        {/* <img className="landingImage" src="https://i.pinimg.com/originals/bc/7e/59/bc7e592b890fbcce9795e3c2cd400643.gif" /> */}

        
        </div> 

        <div className="subheader">
           
            {/* <h3>Organizing your universe one project at a time.</h3> */}

            <div className="buttondiv">    
                <button class="loginbtn" onClick={navigateToLogin}>Login</button>
                <button class="loginbtn" onClick={navigateToSignup}>Signup</button>
            </div>  
        </div>
        </div>
        </>
    )
}



export default Landing