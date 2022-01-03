import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


function CalendarFeature(){
const [date, setDate] = useState(new Date())
const [endDate, setEndDate] = useState(new Date())

const onChange = date => {
    setDate(date)
    console.log(date)
}

const onChange2 = endDate => {
    setEndDate(endDate)
    console.log(endDate)
}

 
    
    return(
        <>
       
        <div className="calander-div">
        <h5>Start Date</h5>
            <Calendar className="calendar" 
            onChange={onChange}
             value={date} 
             />
             {date.toString()}
             </div>

             <div className="calander-div2">
             <h5>End Date</h5>
             <Calendar className="calendar" 
            onChange={onChange2}
             value={endDate} 
             />

             {endDate.toString()}

             
        </div>

        </>
    )
}



export default CalendarFeature