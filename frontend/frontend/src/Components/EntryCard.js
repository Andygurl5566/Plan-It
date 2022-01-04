import React, {useState} from "react"
import EditEntryForm from "./EditEntryForm";




function EntryCard({entries, edited, setEdited, onDeleteEntries, handleDeleteEntry, setMenuItem}){
    const {id} = entries
    const [toggle, setToggle] = useState(false);
    const [test1, setTest1] = useState("");

    const [yearstate, setYear] = useState("0000");
    const [daystate, setDay] = useState("0");
    const [monthstate, setMonth] = useState("0");



   
  const gapi = window.gapi
  const CLIENT_ID = "227745994117-ib0imbkhlnl5vnulgn4aghqhjkih9nut.apps.googleusercontent.com"
  const API_KEY = process.env.API_KEY

  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";
  // must have only scopes that match in your api console

// console.log(`${Intl.DateTimeFormat().resolvedOptions().timeZone}`)
//gets users current timezone



 const addEvent =()=>{

  gapi.load("client:auth2", ()=> {
    console.log("loaded client")

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })

    gapi.client.load('calendar', 'v3', () => console.log('bam!'))


// date format = `2020-06-28T09:00:00-00:00`



//winner winner chicken dinner
// const d = new Date(2017,1,1);
// console.log(d.toISOString().slice(0,19))

//converts to correct format
// function formatDate(year, monthNum, day){
//     const date = new Date(year,monthNum,day);
//     return (date.toISOString().slice(0,19))
// }

console.log(entries.due_date)


    gapi.auth2.getAuthInstance().signIn()
    .then(() => {
      
      var event = {
        'summary': `${entries.title}`,
        // 'location': '800 Howard St., San Francisco, CA 94103',
        'description': `${entries.details}`,
        'start': {
          'dateTime': `${entries.due_date}:00`,
          'timeZone':`${Intl.DateTimeFormat().resolvedOptions().timeZone}`
        },
        'end': {
          'dateTime': `${entries.due_date}:00`,
          'timeZone':`${Intl.DateTimeFormat().resolvedOptions().timeZone}`
        },
        'recurrence': [
          'RRULE:FREQ=DAILY;COUNT=2'
        ],
       
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
      }

      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event,
      })

      request.execute(event => {
        console.log(event)
        window.open(event.htmlLink)
      })
      

      
      // get events
      gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then(response => {
        const events = response.result.items
        console.log('EVENTS: ', events)
      })
    })
  })
}

  
    function handleToggle(){
    
        setToggle(!toggle)
      
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
            onDeleteEntries(entries);
          }
        }).then(setEdited(entries))
        .then(setMenuItem([]))

            
          }
      


    return (
        <div className = "card" style={{ width: '25rem' }}>

        <div className = "card-body">

            {entries.image == "" || null  ? "" : <img className="card-img-top" src={entries.image} alt="Card image cap"/>}

            <h5 className="card-title">{entries.title}</h5>

            
            {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

            <p className="card-text">{entries.details}</p>
            
            {/* <a href="#" className="btn btn-primary">Details</a> */}
           
            <button onClick={handleToggle} className="general-button2">{toggle==false? "Edit":"Close"}</button>
            
            <button onClick={confirmDelete} className="general-button2"> Delete </button>

            {entries.due_date ==  "" ? "" : <button onClick={addEvent} className="general-button2"> Add To Calander</button>}

            {toggle == false? "" : <EditEntryForm 
                edited={edited}
                setEdited={setEdited}
                onDeleteEntry={onDeleteEntries}
                handleDeleteEntry={handleDeleteEntry}
                entries ={entries} 
                id={id} setToggle={setToggle} 
                test1={test1}
                setTest1={setTest1}
                // setYear={setYear}
                // setMonth={setMonth}
                // setday={setDay} 
                
                />  }
          

        </div>
    </div>
    )
}

export default EntryCard