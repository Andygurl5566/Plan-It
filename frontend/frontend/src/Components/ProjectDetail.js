import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import EntryCard from "./EntryCard"
import NewEntryForm from "./NewEntryForm"
import AddPrompt from "./AddPrompt"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import Subtitles from "./Subtitles"



function ProjectDetail(){
    const [edited, setEdited] = useState(true)
    const [entryList, setEntries] = useState([])
    const {project_id} = useParams()
    const [toggle, setToggle] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")
    // const [sortcards, setSortcards] = useState("asc")
    const [position, updatePosition] = useState(entryList)
    

    function handleToggle(){
    
        setToggle(!toggle)
        console.log(toggle)
    }

    function onDeleteEntries(deletedEntries) {
        setEntries((entries) =>
          entries.filter((entries) => entries.id !== deletedEntries.id)
        );
      }

    useEffect(() => {
    
        fetch(`/projects/${project_id}`)
            .then((r) => r.json())
            .then((project) => {
                
                setEntries(project.entries)
                
                              
            })
    }, [edited])

    useEffect(() => {
    
        fetch(`/projects/${project_id}`)
            .then((r) => r.json())
            .then((project) => {
                
                updatePosition(project.entries)
                setEntries(project.entries)
               
                              
            })
    }, [edited])

    // if (sortcards.sort == "asc"){
    //     entryList.title.sort((a,b)=>{
    //        console.log(entryList.title)
    //        const diif = a.title -b.title
    //        return
           
    //     })
       
    // }

    function handleOnDragEnd(result){

       console.log(result)
        if(!result.destination) return
        const items = Array.from(position)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        updatePosition(items)
      

    }


 return(
  <>
       
        <div className="pageheader">

            <h1>Entries</h1>
            <button onClick = {handleToggle} className="btn btn-primary">  Add Entry </button>
            <a  className="btn btn-primary" href="/projects"> Back </a>
            <img className ="searchicon" src="http://cdn.onlinewebfonts.com/svg/img_330258.png"/>
            <input class ="searchbar" type="text" placeholder=" Search Projects . . ." onChange={event=> {setSearchTerm(event.target.value)}}></input>

        </div>

        {toggle == true? <NewEntryForm toggle={toggle} setToggle={setToggle} edited={edited} setEdited={setEdited}/> : ""}

        <div className="promptdiv">
            {entryList == "" ? <AddPrompt/>: ""}
        </div>
            {entryList == "" ? "" : <Subtitles/> }
       <div>

   
        <div id="CardsDiv2">

            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="cardId">
                {(provided)=>(
                    <div className="cards2" {...provided.droppableProps} ref={provided.innerRef}>
                        {position.filter((entries)=>{
                            if (searchTerm == "") {
                                return entries
                            } else if (entries.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return entries
                            }
                        }).map((entries, index) => {
                            console.log(index)
                            
                        return (
                                <Draggable key={entries.id} draggableId={`${entries.id}`} index={index}>
                                    {(provided)=>(
                                        <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} id="EntryCards">
                                
                                        <EntryCard edited={edited} setEdited={setEdited} entries={entries} onDeleteEntries={onDeleteEntries} />
                                
                                        </div>
                                    )}
                                </Draggable>
                            )})
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            </DragDropContext>
        </div>
        </div>



        <div id="CardsDiv3">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="cardId">
                {(provided)=>(
                    <div className="cards2" {...provided.droppableProps} ref={provided.innerRef}>
                        {position.filter((entries)=>{
                            if (searchTerm == "") {
                                return entries
                            } else if (entries.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return entries
                            }
                        }).map((entries, index) => {
                            console.log(index)
                            
                        return (
                                <Draggable key={entries.id} draggableId={`${entries.id}`} index={index}>
                                    {(provided)=>(
                                        <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} id="EntryCards">
                                
                                        <EntryCard edited={edited} setEdited={setEdited} entries={entries} onDeleteEntries={onDeleteEntries} />
                                
                                        </div>
                                    )}
                                </Draggable>
                            )})
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            </DragDropContext>
        </div>
        
        <div id="CardsDiv3">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="cardId">
                {(provided)=>(
                    <div className="cards2" {...provided.droppableProps} ref={provided.innerRef}>
                        {position.filter((entries)=>{
                            if (searchTerm == "") {
                                return entries
                            } else if (entries.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return entries
                            }
                        }).map((entries, index) => {
                            console.log(index)
                            
                        return (
                                <Draggable key={entries.id} draggableId={`${entries.id}`} index={index}>
                                    {(provided)=>(
                                        <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} id="EntryCards">
                                
                                        <EntryCard edited={edited} setEdited={setEdited} entries={entries} onDeleteEntries={onDeleteEntries} />
                                
                                        </div>
                                    )}
                                </Draggable>
                            )})
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            </DragDropContext>
        </div>
  </>
 )
}



export default ProjectDetail