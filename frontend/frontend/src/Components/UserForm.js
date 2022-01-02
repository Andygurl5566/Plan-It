import { useState} from "react"



function UserForm(){

    const [selectedFile, setSelectedFile] = useState(null)

    const fileHandler = e => {
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
    }

    const fileUploadHandler = () => {

    }

    return(
        <div>
        <h1>Hello</h1>

        <input type="file" onChange={fileHandler}/>
        <button onClick={fileUploadHandler} >Upload</button>
        
        
        </div>
    )

}



export default UserForm