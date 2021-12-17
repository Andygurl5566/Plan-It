

function ProjectCard({project, onDeleteProject}){
    const {id} = project
    
    function confirmDelete(){
        let result = window.confirm("Are you sure you want to delete this project?")
        if (result) {
            handleDeleteProject()
        }
    }

    function handleDeleteProject() {
        fetch(`/projects/${id}`, {
          method: "DELETE",
        }).then((res) => {
            console.log(res)
          if (res.ok) {
            onDeleteProject(project);
          }
        });
      }


    return(
        <div className = "card" style={{ width: '25rem' }}>
            <div className = "card-body">
                <img class="card-img-top" src={project.image} alt="Card image cap"/>

                <h5 className="card-title">{project.title}</h5>
                {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

                <p class="card-text">{project.details}</p>
                
                <a href="/entries" class="btn btn-primary">View Entries</a>
                <a href="#" onClick={confirmDelete} class="btn btn-primary">Delete </a>
            </div>
        </div>
    )
}


export default ProjectCard