import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


function CalendarFeature(){
const [date, setDate] = useState(new Date())


const onChange = date => {
    setDate(date)
    console.log(date.toString().slice(0,16))
    console.log(date.toISOString().slice(0,16))
    

}

    
    return(
        <>
       
        <div >
        <h5>Due Date</h5>
            <Calendar className="calendar" 
            onChange={onChange}
            
             value={date}
             calanderType="ISO 8601" 
             />
             {date.toString().slice(0,16)}
             </div>

        

        </>
    )
}



export default CalendarFeature