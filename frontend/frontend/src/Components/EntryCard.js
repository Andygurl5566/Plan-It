import React, {useState} from "react"
import EditEntryForm from "./EditEntryForm";

function EntryCard({entries, edited, setEdited, onDeleteEntry, handleDeleteEntry}){
    const {id} = entries
    const [toggle, setToggle] = useState(false);

    function handleToggle(){
    
        setToggle(!toggle)
        console.log(toggle)
    }

    function confirmDelete(){
        let result = window.confirm("Are you sure you want to delete this entry?")
        if (result) {
            handleDeleteEntry()
        }
    }

    function handleDeleteEntry() {
        fetch(`/entries/${id}`, {
          method: "DELETE",
        }).then((res) => {
            console.log(res)
          if (res.ok) {
            onDeleteEntry(entries);
          }
        });
      }


    return (
        <div className = "card" style={{ width: '25rem' }}>

        <div className = "card-body">

            <img className="card-img-top" src={entries.image} alt="Card image cap"/>

            <h5 className="card-title">{entries.title}</h5>
            {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

            <p className="card-text">{entries.details}.</p>
            
            <a href="#" className="btn btn-primary">Details</a>
           
            <button onClick={handleToggle} className="btn btn-primary">{toggle==false? "Edit":"Close"}</button>
            
            <button onClick={confirmDelete} className="btn btn-primary"> Delete </button>

            {toggle == false? "" : <EditEntryForm 
                edited={edited}
                setEdited={setEdited}
                onDeleteEntry={onDeleteEntry}
                handleDeleteEntry={handleDeleteEntry}
                entries ={entries} 
                id={id}/> }

        </div>
    </div>
    )
}

export default EntryCard