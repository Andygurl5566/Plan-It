import React, {useState} from "react"

function EntryCard({entries, onDeleteEntry, edited, setEdited}){
    const {id} = entries
    const [toggle, setToggle] = useState(false);


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
            <img class="card-img-top" src={entries.image} alt="Card image cap"/>

            <h5 className="card-title">{entries.title}</h5>
            {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

            <p class="card-text">{entries.details}.</p>
            
            <a href="#" class="btn btn-primary">Details</a>
            <a href="/projects" class="btn btn-primary">Back</a>
            <a href="#" onClick={confirmDelete} className="btn btn-primary">Delete </a>

        </div>
    </div>
    )
}

export default EntryCard