import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


function CalendarFeature({setduedate}){
const [date, setDate] = useState(new Date())
const [endDate, setEndDate] = useState(new Date())

const onChange = date => {
    setDate(date)
    console.log(date)
    

}

// //winner winner chiken dinner
// const d = new Date(2017,1,1);
// console.log(d.toISOString().slice(0,16))

// //converts to correct format
// function formatDate(year, monthNum, day){
//     const date = new Date(year,monthNum,day);
//     return (date.toISOString().slice(0,16))
// }

    
    return(
        <>
       
        <div >
        <h5>Due Date</h5>
            <Calendar className="calendar" 
            onChange={onChange}
            
             value={date}
             calanderType="ISO 8601" 
             />
             {date.toString()}
             </div>

        

        </>
    )
}



export default CalendarFeature